package com.sfofana.app.controller;

import java.io.File;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.sfofana.app.model.Compare;
import com.sfofana.app.model.Upload;
import com.sfofana.app.service.UserService;

@RestController
@CrossOrigin
@RequestMapping("/api/v1")
public class UserController {

	@Autowired
	UserService service;
	
	@PostMapping("compare")
	public Compare compareFaces(@RequestBody Compare faces) {
		return service.compareFacesResults(faces);
	}
	
	@PostMapping("upload/{name}")
	public Upload uploadImage(@PathVariable("name") String fileName, @RequestParam("file") MultipartFile file) {
		return service.processImageUpload(fileName, file);
	}
}
