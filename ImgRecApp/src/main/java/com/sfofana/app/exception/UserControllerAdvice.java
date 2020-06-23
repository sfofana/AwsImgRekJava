package com.sfofana.app.exception;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class UserControllerAdvice extends ResponseEntityExceptionHandler {
	
	private static Logger log = LoggerFactory.getLogger(UserControllerAdvice.class);

	@ExceptionHandler(BusinessException.class)
	public ResponseEntity<Object> fileNotFound(BusinessException exception, WebRequest request) {
		log.info("========= [ FileNotFound Envoked ]");

		return new ResponseEntity<>(new ErrorDetail(exception.getMessage(),"details"), HttpStatus.NOT_FOUND);
	}

}
