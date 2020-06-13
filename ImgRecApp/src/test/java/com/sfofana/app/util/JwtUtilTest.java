package com.sfofana.app.util;

import static org.junit.Assert.assertTrue;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.sfofana.app.controller.UserController;
import com.sfofana.app.model.User;

import io.jsonwebtoken.ExpiredJwtException;

@SpringBootTest
@RunWith(SpringRunner.class)
public class JwtUtilTest {

	@Autowired
	JwtUtil jwtUtil;
	@Autowired
	UserController userController;
	
	private User user = new User("test","test","user","test");

	
	@Test
	public void Test() {
		User token = userController.authenticate(user);
		assertTrue(jwtUtil.validateToken(token.getJToken(), user));
		assertThrows(ExpiredJwtException.class, () ->{
			jwtUtil.validateToken("eyJhbGciOiJIUzI1NiJ9.eyJ"
					+ "zdWIiOiJ1c2VyIiwiZXhwIjoxNTkxNDUwNjg5LCJpYXQiOjE"
					+ "1OTE0NDcwODl9.eHGS_GnWuxYjF0z_DfQ1ChIFLTDhzEsCri"
					+ "l5dAWTsvs", user);
			});	
	}
}
