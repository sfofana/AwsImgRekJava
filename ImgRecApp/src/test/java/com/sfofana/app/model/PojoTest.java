package com.sfofana.app.model;

import static org.junit.Assert.assertTrue;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static pl.pojo.tester.api.assertion.Assertions.assertPojoMethodsFor;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import pl.pojo.tester.internal.GetOrSetValueException;

@SpringBootTest
@RunWith(SpringRunner.class)
public class PojoTest {
	
	@Test
	public void compareTest() {
		Class<?> pojoTest = Compare.class;
		assertThrows(GetOrSetValueException.class, () -> {
			assertPojoMethodsFor(pojoTest).areWellImplemented();
		});
		Throwable result = Assertions.catchThrowable(() -> {
			assertPojoMethodsFor(pojoTest).areWellImplemented();
		});
		assertTrue(result.getMessage().contains("Unable to get or set value for field 'modifiers'"));
	}
	
	@Test
	public void credentialsTest() {
		Class<?> pojoTest = Credentials.class;
		assertThrows(GetOrSetValueException.class, () -> {
			assertPojoMethodsFor(pojoTest).areWellImplemented();
		});
	}
	
	@Test
	public void uploadTest() {
		Class<?> pojoTest = Upload.class;
		assertThrows(GetOrSetValueException.class, () -> {
			assertPojoMethodsFor(pojoTest).areWellImplemented();
		});
	}
	
	@Test
	public void userTest() {
		Class<?> pojoTest = User.class;
		assertThrows(GetOrSetValueException.class, () -> {
			assertPojoMethodsFor(pojoTest).areWellImplemented();
		});
	}
	
	@Test
	public void loggingTest() {
		Class<?> pojoTest = Logging.class;
		assertThrows(GetOrSetValueException.class, () -> {
			assertPojoMethodsFor(pojoTest).areWellImplemented();
		});
	}

}
