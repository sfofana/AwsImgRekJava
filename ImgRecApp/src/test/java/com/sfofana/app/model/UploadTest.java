package com.sfofana.app.model;

import static org.junit.Assert.assertTrue;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@SpringBootTest
@RunWith(SpringRunner.class)
public class UploadTest {

	@Test
	public void uploadTest() {
		String image = "test";
		String name = "test";
		String process = "test";
		Upload noArg = new Upload();
		Upload upload = new Upload(
				"test",
				"test",
				"test"
				);
		upload.setImage(image);
		upload.setName(name);
		upload.setProcess(process);
		assertTrue(noArg.getImage() == null);
		assertTrue(upload.getImage().equals("test"));
		assertTrue(upload.getName().equals("test"));
		assertTrue(upload.getProcess().equals("test"));
	}
	
}
