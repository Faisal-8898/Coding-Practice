package com.autowire.practiceAutoWire;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class PracticeAutoWireApplication {

	public static void main(String[] args) {
		var context = new AnnotationConfigApplicationContext(ParrotConfig.class);

		Person p = context.getBean(Person.class);
		System.out.println("Person's name: " + p.getName());
		System.out.println("Person's parrot: " + p.getParrot());
	}

}
