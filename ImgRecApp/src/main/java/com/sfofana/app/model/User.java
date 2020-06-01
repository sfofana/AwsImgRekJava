package com.sfofana.app.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
/**
 * @author Sufyan Fofana
 * @version 1.0
 * User pojo holding elements which allows user to use application
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User {
	
	private String cToken;
	private String jToken;
	private String role;
	private String message;

}
