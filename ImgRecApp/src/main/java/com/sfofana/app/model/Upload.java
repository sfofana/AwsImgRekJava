package com.sfofana.app.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
/**
 * @author Sufyan Fofana
 * @version 1.0
 * Upload pojo holding upload file details
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Upload {

	private String name;
	private String process;
	private String image;
}
