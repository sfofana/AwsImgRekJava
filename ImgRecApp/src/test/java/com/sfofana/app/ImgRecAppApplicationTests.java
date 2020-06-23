package com.sfofana.app;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@SpringBootTest
@RunWith(SpringRunner.class)
class ImgRecAppApplicationTests {
	
	private static Logger log = LoggerFactory.getLogger(ImgRecAppApplicationTests.class);

	 @Test
	 public void mainTest() throws Exception {	 
		 log.info("======================= [ MainTest Start ] =======================");

		 ImgRecAppApplication.main(new String[] {});
		 
		 log.info("======================= [ MainTest End ] =======================");
	 }
}
