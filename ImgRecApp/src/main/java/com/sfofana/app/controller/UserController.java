package com.sfofana.app.controller;

import java.io.File;

import javax.servlet.http.HttpServletRequest;

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
import com.sfofana.app.model.Credentials;
import com.sfofana.app.model.Upload;
import com.sfofana.app.model.User;
import com.sfofana.app.service.UserService;
import com.sfofana.app.util.VaultUtil;

@RestController
@CrossOrigin
@RequestMapping("/api/v1")
public class UserController {

	@Autowired
	private HttpServletRequest request;
	@Autowired
	private UserService service;
	@Autowired
	private VaultUtil vaultUtil;
	
	@PostMapping("authenticate")
	public User authenticate(@RequestBody User user) throws Exception {
		return service.initiateSession(user);
	}
	
	@PostMapping("compare")
	public Compare compareFaces(@RequestBody Compare faces) throws Exception {
		try {
			service.tokenAuthenticated(getToken());
		} catch (Exception e) {
			throw new Exception("Access Denied");
		}		
		return service.compareFacesResults(faces);
	}
	
	@PostMapping("upload/{name}")
	public Upload uploadImage(@PathVariable("name") String fileName, @RequestParam("file") MultipartFile file) throws Exception {
		try {
			service.tokenAuthenticated(getToken());
		} catch (Exception e) {
			throw new Exception("Access Denied");
		}	
		return service.processImageUpload(fileName, file);
	}
	
	private String getToken() {
		return request.getHeader("jToken");
	}
}
