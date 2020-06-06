package com.sfofana.app.service;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.ByteBuffer;
import java.nio.file.Files;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.amazonaws.AmazonServiceException;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.rekognition.AmazonRekognition;
import com.amazonaws.services.rekognition.AmazonRekognitionClientBuilder;
import com.amazonaws.services.rekognition.model.Image;
import com.amazonaws.services.rekognition.model.S3Object;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.GetObjectRequest;
import com.amazonaws.services.rekognition.model.BoundingBox;
import com.amazonaws.services.rekognition.model.CompareFacesMatch;
import com.amazonaws.services.rekognition.model.CompareFacesRequest;
import com.amazonaws.services.rekognition.model.CompareFacesResult;
import com.amazonaws.services.rekognition.model.ComparedFace;
import java.util.List;
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.nio.ByteBuffer;

import com.amazonaws.util.Base64;
import com.amazonaws.util.IOUtils;
import com.sfofana.app.exception.BusinessException;
import com.sfofana.app.model.Compare;
import com.sfofana.app.model.Credentials;
import com.sfofana.app.model.Upload;
import com.sfofana.app.model.User;
import com.sfofana.app.util.JwtUtil;

/**
 * @author Sufyan Fofana
 * @version 1.0
 * Implementation of User Service
 *
 */
@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private Credentials credentials;
	@Autowired
	private JwtUtil jwtUtil;
	
	Float similarityThreshold = 70F;	
	
	@Override
	public Compare compareFacesResults(Compare faces) {
		BasicAWSCredentials awsCredentials = new BasicAWSCredentials(
				credentials.getAccessKey(), 
				credentials.getSecretKey()
				); 
		AmazonRekognition client = AmazonRekognitionClientBuilder
												.standard()
												.withCredentials(new AWSStaticCredentialsProvider(awsCredentials))
												.withRegion("us-east-2").build();
		
		List<String> names = new ArrayList<String>();
		faces.getNames().forEach(data -> {
			names.add("temp" + System.getProperty("user.dir") + "/" + data +".jpg");
		});
		try {
			CompareFacesRequest compareFacesRequest = new CompareFacesRequest()
					.withSourceImage(
							new Image()
							.withS3Object(new S3Object()
									.withName(names.get(0))
									.withBucket(credentials.getBucket())
									)
							).withTargetImage(
							new Image()
							.withS3Object(new S3Object()
									.withName(names.get(1))
									.withBucket(credentials.getBucket())
									)
							).withSimilarityThreshold(similarityThreshold);
			CompareFacesResult results = client.compareFaces(compareFacesRequest);
			List<CompareFacesMatch> resList = results.getFaceMatches();
			
			if(!resList.isEmpty()) {
				for(CompareFacesMatch match : resList) {
					faces.setResults(match.getSimilarity());
					System.out.println("Similarity is: " + match.getSimilarity());
				}
			} else {
				System.out.println("Faces don't match");
				faces.setResults(69);
			}
		} catch (Exception e) {
			System.out.println("Faces don't match");
			faces.setResults(50);
		}
		return getImageData(faces);
	}
	
	@Override
	public Compare getImageData(Compare faces) {
		BasicAWSCredentials awsCredentials = new BasicAWSCredentials(
				credentials.getAccessKey(), 
				credentials.getSecretKey()
				); 
		AmazonS3 s3 = AmazonS3ClientBuilder
												.standard()
												.withCredentials(new AWSStaticCredentialsProvider(awsCredentials))
												.withRegion("us-east-2").build();
		
		List<String> images = new ArrayList<String>();
		List<String> details = new ArrayList<String>();
		faces.getNames().forEach(data ->{
			String file = System.getProperty("user.dir") + "/" + data +".jpg";
			com.amazonaws.services.s3.model.S3Object content = null;			
			try {
				content = s3.getObject(credentials.getBucket(), "temp"+file);
				String face = Base64.encodeAsString(IOUtils.toByteArray(content.getObjectContent()));
				images.add(face);
				details.add(data);
			} catch (AmazonServiceException e) {
				details.add("There is no image with the name: " + data);
				System.out.println("Internal Server Error");
			} catch (IOException e) {
				System.out.println("Internal Server Error");
				e.printStackTrace();
			}
		});
				
		faces.setImages(images);
		faces.setDetails(details);
		return faces;
	}

	@Override
	public Upload processImageUpload(String fileName, MultipartFile file) {
		BasicAWSCredentials awsCredentials = new BasicAWSCredentials(
				credentials.getAccessKey(), 
				credentials.getSecretKey()
				); 
		AmazonS3 s3 = AmazonS3ClientBuilder
												.standard()
												.withCredentials(new AWSStaticCredentialsProvider(awsCredentials))
												.withRegion("us-east-2").build();
		
		Upload upload = new Upload(fileName, "Image was not successully uploaded.. try agian", null);
		if(file.isEmpty()) {
			upload.setProcess("Please choose a image you wish to upload");
		} else {
			String filePath = System.getProperty("user.dir") + "/" +fileName +".jpg";
			System.out.println(System.getProperty("user.dir"));
			try {
				file.transferTo(new File(filePath));
				File output = new File(filePath);
				String image = Base64.encodeAsString(Files.readAllBytes(output.toPath()));
				try {
					s3.putObject(credentials.getBucket(), "temp"+filePath, output);
					upload.setProcess("File successfully uploaded");
					upload.setImage(image);
				} catch (AmazonServiceException e) {
					System.out.println("Internal Server Error");
				}
			} catch (IllegalStateException | IOException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
		}
			
		return upload;
	}

	@Override
	public Boolean tokenAuthenticated(String token)  throws BusinessException {
		String role = null;
		String jwt = null;
		Boolean flag = false;
		
		if(token != null && token.startsWith("Bearer ")) {
			try {
				jwt = token.substring(7);
				role = jwtUtil.extractUser(jwt);
				flag = jwtUtil.validateToken(jwt, getAccess());
			} catch (Exception e) {
				throw new BusinessException("Invalid Session");
			} 
		} else {
			throw new BusinessException("Invalid Session");
		}
		return flag;
	}

	@Override
	public User initiateSession(User user) {
		final String jwt = jwtUtil.generateToken(user);
		user.setJToken(jwt);
		return user;
	}
	
	@Override
	public User getAccess() {
		return new User(null, null, "user", null);
	}
	
}
