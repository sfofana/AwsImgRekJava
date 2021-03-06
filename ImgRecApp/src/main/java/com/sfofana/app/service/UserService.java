package com.sfofana.app.service;

import org.springframework.web.multipart.MultipartFile;

import com.sfofana.app.exception.BusinessException;
import com.sfofana.app.model.Compare;
import com.sfofana.app.model.Logging;
import com.sfofana.app.model.Upload;
import com.sfofana.app.model.User;

/**
 * @author Sufyan Fofana
 * @version 1.0
 * User service interface for providing a contact for implementation
 *
 */
public interface UserService {

	/**
	 * @param faces With AWS credentials compares image similarity within the 
	 * provided S3 bucket
	 * @return Similarity percentage, images and image names
	 */
	public Compare compareFacesResults(Compare faces);
	/**
	 * @param faces With AWS credentials downloads image based on file name of
	 * of image given in the faces
	 * @return Image data
	 */
	public Compare getImageData(Compare faces);
	/**
	 * @param fileName The name of the image
	 * @param file The multi-part form data
	 * @return Uploaded image only with AWS credentials and file is saved and 
	 * uploaded to S3 bucket
	 */
	public Upload processImageUpload(String fileName, MultipartFile file);
	/**
	 * @param token The token to be validated
	 * @return True only if user roles match and is not expired
	 * @throws BusinessException Catches invalid, empty, or expired tokens
	 */
	public Boolean tokenAuthenticated(String token) throws BusinessException;
	/**
	 * @param user The user requesting access, user role is required
	 * @return User with their generated token needed for access to the
	 * application
	 */
	public User initiateSession(User user);
	/**
	 * @return Pre-set user with role for role validation of incomming requests
	 * 
	 */
	public User getAccess();
	/**
	 * @param logging The logs from the frontend
	 * @return Success message
	 */
	public Logging frontendLogTofile(Logging logging);
}
