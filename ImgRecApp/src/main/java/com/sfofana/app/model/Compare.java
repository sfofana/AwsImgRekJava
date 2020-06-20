package com.sfofana.app.model;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
/**
 * @author Sufyan Fofana
 * @version 1.0
 * Compare pojo holding names and faces to compare
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Compare {

	private List<String> names;
	private List<String> images;
	private List<String> details;
	private double results;
}
