package com.sfofana.app.exception;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


public class BusinessException extends RuntimeException {

	private static Logger log = LoggerFactory.getLogger(BusinessException.class);

	/**
	 * An exception class wrapper for RuntimeException
	 */
	private static final long serialVersionUID = 1L;

	public BusinessException(String message) {
		super(message);
		log.info("========= [ BusinessException Envoked ]");

	}

	
}
