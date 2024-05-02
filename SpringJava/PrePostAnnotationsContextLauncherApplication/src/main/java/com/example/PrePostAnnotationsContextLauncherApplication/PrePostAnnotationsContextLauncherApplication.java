package com.example.PrePostAnnotationsContextLauncherApplication;

import jakarta.inject.Inject;
import jakarta.inject.Named;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Named
class SomeClass{
	private SomeDependency someDependency;

	@Inject
	public SomeClass(SomeDependency someDependency) {
		this.someDependency = someDependency;
		System.out.println("All Dependency is ready");
	}
	public void initalizer(){
		someDependency.getReady();
	}
}

@Named
class SomeDependency{
	public void getReady(){
		System.out.println("Ready for play");
	}
}

@Configuration
@ComponentScan
public class PrePostAnnotationsContextLauncherApplication {

	public static void main(String[] args) {
		try(var context = new AnnotationConfigApplicationContext(PrePostAnnotationsContextLauncherApplication.class)){
			Arrays.stream(context.getBeanDefinitionNames())
					.forEach(System.out::println);
			context.getBean(SomeClass.class).initalizer();
		}
	}

}
