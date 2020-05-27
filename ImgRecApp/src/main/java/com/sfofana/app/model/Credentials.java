package com.sfofana.app.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Credentials {

	private String key;
	private String secretKey;
	private String accessKey;
	private String bucket;
	private String username;
	private String password;
	
}