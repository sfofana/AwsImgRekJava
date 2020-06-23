package com.sfofana.app.exception;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNull;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@SpringBootTest
@RunWith(SpringRunner.class)
public class ErrorDetailTest {

	private static Logger log = LoggerFactory.getLogger(ErrorDetailTest.class);

	@Test
	public void errorDetailTest() {
		log.info("======================= [ ErrorDetailTest Start ] =======================");

		String detail = "test";
		String message = "test";
		ErrorDetail noArg = new ErrorDetail();
		ErrorDetail error = new ErrorDetail("test","test");
		error.setDetail(detail);
		error.setMessage(message);
		assertNull(noArg.getDetail());
		assertEquals("test", error.getMessage());
		
		log.info("======================= [ ErrorDetailTest End ] =======================");
	}
}
