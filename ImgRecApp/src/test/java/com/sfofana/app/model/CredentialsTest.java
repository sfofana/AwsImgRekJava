package com.sfofana.app.model;

import static org.junit.Assert.assertTrue;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@SpringBootTest
@RunWith(SpringRunner.class)
public class CredentialsTest {

	@Test
	public void credentialsTest() {
		Credentials credentials = new Credentials(
				"test",
				"test",
				"test",
				"test",
				"test",
				"test"
				);
		assertTrue(credentials.getKey().equals("test"));
		assertTrue(credentials.getUsername().equals("test"));
		assertTrue(credentials.getPassword().equals("test"));
		assertTrue(credentials.getBucket().equals("test"));
		assertTrue(credentials.getSecretKey().equals("test"));
		assertTrue(credentials.getAccessKey().equals("test"));
	}
}
