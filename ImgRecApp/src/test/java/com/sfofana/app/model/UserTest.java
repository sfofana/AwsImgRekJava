package com.sfofana.app.model;

import static org.junit.Assert.assertTrue;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@SpringBootTest
@RunWith(SpringRunner.class)
public class UserTest {

	@Test
	public void userTest() {
		User noArg = new User();
		User user = new User("test","test","test","test");
		user.setCToken("test");
		user.setJToken("test");
		user.setRole("test");
		user.setMessage("test");
		assertTrue(noArg.getCToken() == null);
		assertTrue(user.getCToken().equals("test"));
		assertTrue(user.getJToken().equals("test"));
		assertTrue(user.getRole().equals("test"));
		assertTrue(user.getMessage().equals("test"));
	}
}
