package com.sfofana.app.service;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.web.multipart.MultipartFile;

import com.sfofana.app.model.Compare;
import com.sfofana.app.model.Logging;
import com.sfofana.app.model.Upload;

@SpringBootTest
@RunWith(SpringRunner.class)
public class UserServiceTest {
	
	private static Logger log = LoggerFactory.getLogger(UserServiceTest.class);

	@Autowired
	UserService userService;
	
	@Test
	public void compareFacesResultsTest() {
		log.info("======================= [ CompareFacesResultsTest Start ] =======================");
		
		List<String> names = Arrays.asList("joe1","joe2");
		List<String> malNames = Arrays.asList("mal","mal");
		Compare faces = new Compare(names, null, null, 0);
		Compare malData = new Compare(malNames, null, null, 0);
		Compare test = userService.compareFacesResults(faces);
		Compare exception = userService.compareFacesResults(malData);
		assertTrue(!test.getNames().isEmpty());
		assertTrue(!test.getImages().isEmpty());
		assertTrue(!test.getDetails().isEmpty());
		assertTrue(test.getResults() > 0);	
		assertTrue(exception.getResults() > 0);
		exception.getDetails().forEach(ex -> {
			assertEquals("There is no image with the name: mal", ex);
		});
		
		log.info("======================= [ CompareFacesResultsTest End ] =======================");		
	}
	
	@Test
	public void processImageUploadTest() throws FileNotFoundException, IOException {
		log.info("======================= [ ProcessImageUploadTest Start ] =======================");

		String path = System.getProperty("user.dir") + "/";
		String fileName = "testFile";
		MultipartFile file = new MockMultipartFile("testFile.txt", new FileInputStream(new File(path+"testFile.txt")));
		Upload test = userService.processImageUpload(fileName, file);
		assertNotNull(test.getName());
		assertNotNull(test.getImage());
		assertNotNull(test.getProcess());		
		
		log.info("======================= [ ProcessImageUploadTest End ] =======================");
	}
	
	@Test
	public void frontendLogToFileTest() {
		log.info("======================= [ FrontendLogToFile Start ] =======================");

		Logging logging = new Logging("Jun 21, 2020, 10:11:39 PM : [JavaTest] === should write to frontend.txt \n");
		Logging test = userService.frontendLogTofile(logging);
		assertNotNull(test.getMessage());	
		
		log.info("======================= [ FrontendLogToFile End ] =======================");
	}
}
