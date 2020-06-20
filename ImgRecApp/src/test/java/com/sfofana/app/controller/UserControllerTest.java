package com.sfofana.app.controller;

import static org.junit.jupiter.api.Assertions.assertThrows;

import java.io.File;
import java.io.FileInputStream;
import java.util.Arrays;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpServletRequest;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.request.RequestPostProcessor;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.web.multipart.MultipartFile;

import com.amazonaws.util.Base64;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.sfofana.app.exception.BusinessException;
import com.sfofana.app.model.Compare;
import com.sfofana.app.model.Credentials;
import com.sfofana.app.model.User;

@SpringBootTest
@RunWith(SpringRunner.class)
@AutoConfigureMockMvc
public class UserControllerTest {

	@Autowired
	Credentials credentials;
	@Autowired
	UserController userController;
	@Autowired
	MockMvc mockMvc;
	@Autowired 
	ObjectMapper objectMapper;
	
	private User user = new User("test","test","user","test");
	
	@Test
	public void authenticateTest() throws Exception {
		String json = objectMapper.writeValueAsString(user);
		String basicAuth = credentials.getUsername()+":"+credentials.getPassword();
		byte[] basic = basicAuth.getBytes();
		mockMvc.perform(MockMvcRequestBuilders.post("/api/v1/authenticate")
				.content(json)
				.contentType(MediaType.APPLICATION_JSON)
		.header("Authorization", "Basic " + Base64.encodeAsString(basic)))
		.andExpect(MockMvcResultMatchers.status().isOk());		
	}
	
	@Test
	public void compareFacesTest() throws Exception {
		User token = userController.authenticate(user);
		
		List<String> names = Arrays.asList("joe1","joe2");
		Compare faces = new Compare(names, null, null, 0);
		String json = objectMapper.writeValueAsString(faces);
		String basicAuth = credentials.getUsername()+":"+credentials.getPassword();
		byte[] basic = basicAuth.getBytes();
		mockMvc.perform(MockMvcRequestBuilders.post("/api/v1/compare")
				.content(json)
				.contentType(MediaType.APPLICATION_JSON)
		.header("Authorization", "Basic " + Base64.encodeAsString(basic))
		.header("jToken", "Bearer " + token.getJToken()))		
		.andExpect(MockMvcResultMatchers.status().isOk());	

		assertThrows(BusinessException.class, () ->{
			userController.compareFaces(faces);
		});
		
		mockMvc.perform(MockMvcRequestBuilders.post("/api/v1/compare")
				.content(json)
				.contentType(MediaType.APPLICATION_JSON)
		.header("Authorization", "Basic " + Base64.encodeAsString(basic))
		.header("jToken", "Bearer malToken" + token.getJToken()))
		.andExpect(MockMvcResultMatchers.status().isNotFound());
	}
	
	@Test
	public void uploadImageTest() throws Exception {
		User token = userController.authenticate(user);
		
		String path = System.getProperty("user.dir") + "/";
		String fileName = "testFile";
		MultipartFile file = new MockMultipartFile("file", new FileInputStream(new File(path+"testFile.txt")));
		MockMultipartFile mockFile = new MockMultipartFile("file", new FileInputStream(new File(path+"testFile.txt")));
		
		String basicAuth = credentials.getUsername()+":"+credentials.getPassword();
		byte[] basic = basicAuth.getBytes();
		
		mockMvc.perform(MockMvcRequestBuilders.multipart("/api/v1/upload/{name}",fileName)
				.file(mockFile)
				.with(new RequestPostProcessor() {
			        @Override
			        public MockHttpServletRequest postProcessRequest(MockHttpServletRequest request) {
			            request.setMethod("POST");
			            return request;
			        }
			    })			
		.header("Authorization", "Basic " + Base64.encodeAsString(basic))
		.header("jToken", "Bearer " + token.getJToken()))		
		.andExpect(MockMvcResultMatchers.status().isOk());	
		
		assertThrows(BusinessException.class, () ->{
			userController.uploadImage(fileName, file);
		});
	}
}
