package com.sfofana.app.service;

import java.io.File;

import org.springframework.web.multipart.MultipartFile;

import com.sfofana.app.model.Compare;
import com.sfofana.app.model.Upload;

public interface UserService {

	public Compare compareFacesResults(Compare faces);
	public Upload processImageUpload(String fileName, MultipartFile file);
}
