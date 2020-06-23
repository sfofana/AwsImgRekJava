package com.sfofana.app;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import springfox.documentation.swagger2.annotations.EnableSwagger2;
/**
 * @author Sufyan Fofana
 * @version 1.0
 *
 */
@SpringBootApplication
@EnableSwagger2
public class ImgRecAppApplication {

	private static Logger log = LoggerFactory.getLogger(ImgRecAppApplication.class);

	/** Main entry
	 * @param args arguments for main method
	 * @throws Exception exception handling
	 */
	public static void main(String[] args) throws Exception {		
		log.info("========= [ Main Envoked ]");
		
		SpringApplication.run(ImgRecAppApplication.class, args);
	   }
}
