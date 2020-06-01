package com.sfofana.app;

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

	/** Main entry
	 * @param args arguments for main method
	 * @throws Exception exception handling
	 */
	public static void main(String[] args) throws Exception{
		SpringApplication.run(ImgRecAppApplication.class, args);
	   }
}
