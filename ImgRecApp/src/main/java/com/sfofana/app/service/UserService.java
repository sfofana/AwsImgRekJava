package com.sfofana.app.service;

import java.io.File;

import org.springframework.web.multipart.MultipartFile;

import com.amazonaws.services.rekognition.model.Image;
import com.sfofana.app.model.Compare;
import com.sfofana.app.model.Upload;
import com.sfofana.app.model.User;

public interface UserService {

	public Compare compareFacesResults(Compare faces);
	public Compare getImageData(Compare faces);
	public Upload processImageUpload(String fileName, MultipartFile file);
	public Boolean tokenAuthenticated(String token) throws Exception;
	public User initiateSession(User user);
	public User getAccess();
}
