package com.sfofana.app.exception;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNull;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@SpringBootTest
@RunWith(SpringRunner.class)
public class ErrorDetailTest {

	@Test
	public void errorDetailTest() {
		String detail = "test";
		String message = "test";
		ErrorDetail noArg = new ErrorDetail();
		ErrorDetail error = new ErrorDetail("test","test");
		error.setDetail(detail);
		error.setMessage(message);
		assertNull(noArg.getDetail());
		assertEquals("test", error.getMessage());
	}
}
