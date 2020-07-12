package com.sfofana.app.controller;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.sfofana.app.exception.BusinessException;
import com.sfofana.app.model.Compare;
import com.sfofana.app.model.Logging;
import com.sfofana.app.model.Upload;
import com.sfofana.app.model.User;
import com.sfofana.app.service.UserService;
/**
 * @author Sufyan Fofana
 * @version 1.0
 *
 */
@RestController
@CrossOrigin
@RequestMapping("/api/v1")
public class UserController {

	private static Logger log = LoggerFactory.getLogger(UserController.class);

	@Autowired
	private HttpServletRequest request;
	@Autowired
	private UserService service;
	
	/**
	 * @param user Parses user from request body
	 * @return Allows user access to application only with provided token
	 * @throws BusinessException Handles exceptions
	 */
	@PostMapping("authenticate")
	public User authenticate(@RequestBody User user) throws BusinessException {
		log.info("========= [ Authenticate Envoked ]");

		return service.initiateSession(user);
	}
	
	/**
	 * @param faces Parses faces to compare from request body
	 * @return Returns face similarity results only if given token is valid
	 * @throws BusinessException Handles exception with message "Access Denied"
	 */
	@PostMapping("compare")
	public Compare compareFaces(@RequestBody Compare faces) throws BusinessException {
		log.info("========= [ CompareFaces Envoked ]");

		service.tokenAuthenticated(getToken());
		return service.compareFacesResults(faces);
	}
	
	/**
	 * @param fileName Parses file name from url
	 * @param file Parses file from request parameter name "file"
	 * @return Returns status on image being uploaded
	 * @throws BusinessException Handles exception with message "Access Denied"
	 */
	@PostMapping("upload/{name}")
	public Upload uploadImage(@PathVariable("name") String fileName, @RequestParam("file") MultipartFile file) throws BusinessException {
		log.info("========= [ UploadImage Envoked ]");

		service.tokenAuthenticated(getToken());
		return service.processImageUpload(fileName, file);
	}
	
	/**
	 * @param logging The logs from request body
	 * @return Success message
	 */
	@PostMapping("logging")
	public Logging frontEndLogging(@RequestBody Logging logging) {
		log.info("========= [ FrontEndLogging Envoked ]");

		return service.frontendLogTofile(logging);
	}
	
	/**
	 * @return Returns jToken from header which is needed for token validation
	 */
	private String getToken() {
		log.info("========= [ GetToken Envoked ]");

		return request.getHeader("jToken");
	}
}
