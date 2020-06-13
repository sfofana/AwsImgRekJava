package com.sfofana.app.model;

import static org.junit.Assert.assertTrue;
import static pl.pojo.tester.api.assertion.Assertions.assertPojoMethodsFor;

import java.util.Arrays;
import java.util.List;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@SpringBootTest
@RunWith(SpringRunner.class)
public class CompareTest {

	@Test
	public void compareTest() {
		Class<?> pojoTest = Compare.class;
		Throwable result = Assertions.catchThrowable(() -> {
			assertPojoMethodsFor(pojoTest).areWellImplemented();
		});
		
		
//		List<String> names = Arrays.asList("joe1","joe2");
//		List<String> images = Arrays.asList("img1","img2");
//		List<String> details = Arrays.asList("detail1","detail2");
//		double results = 100;
//		Compare noArg = new Compare();
//		Compare faces = new Compare(names, images, details, results);
//		faces.setDetails(details);
//		faces.setNames(names);
//		faces.setImages(images);
//		faces.setResults(results);
//		assertTrue(noArg != null);
//		assertTrue(faces.getNames().size() > 0);
//		assertTrue(faces.getImages().size() > 0);
//		assertTrue(faces.getDetails().size() > 0);
//		assertTrue(faces.getResults() > 0);
	}
}
