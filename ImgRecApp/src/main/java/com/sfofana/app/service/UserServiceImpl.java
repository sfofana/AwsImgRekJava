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
import com.sfofana.app.model.Compare;
import com.sfofana.app.model.Upload;

@Service
public class UserServiceImpl implements UserService {

	@Value("${aws.access.key}")
	private String accessKey;
	@Value("${aws.secret.key}")
	private String secretKey;
	@Value("${aws.s3.bucket}")
	private String bucket;
	
	Float similarityThreshold = 70F;	
	
	@Override
	public Compare compareFacesResults(Compare faces) {
		BasicAWSCredentials credentials = new BasicAWSCredentials(accessKey, secretKey); 
		AmazonRekognition client = AmazonRekognitionClientBuilder
												.standard()
												.withCredentials(new AWSStaticCredentialsProvider(credentials))
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
									.withBucket(bucket)
									)
							).withTargetImage(
							new Image()
							.withS3Object(new S3Object()
									.withName(names.get(1))
									.withBucket(bucket)
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
		BasicAWSCredentials credentials = new BasicAWSCredentials(accessKey, secretKey); 
		AmazonS3 s3 = AmazonS3ClientBuilder
												.standard()
												.withCredentials(new AWSStaticCredentialsProvider(credentials))
												.withRegion("us-east-2").build();
		
		List<String> images = new ArrayList<String>();
		List<String> details = new ArrayList<String>();
		faces.getNames().forEach(data ->{
			String file = System.getProperty("user.dir") + "/" + data +".jpg";
			com.amazonaws.services.s3.model.S3Object content = null;			
			try {
				content = s3.getObject(bucket, "temp"+file);
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
		BasicAWSCredentials credentials = new BasicAWSCredentials(accessKey, secretKey); 
		AmazonS3 s3 = AmazonS3ClientBuilder
												.standard()
												.withCredentials(new AWSStaticCredentialsProvider(credentials))
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
					s3.putObject(bucket, "temp"+filePath, output);
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
	
}
