package BusinessServiceCalculation;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import java.util.Arrays;

@Configuration
@ComponentScan
public class BusinessServiceCalculationApplication {
	public static void main(String[] args) {
		var context = new AnnotationConfigApplicationContext(BusinessServiceCalculationApplication.class);
		Arrays.stream(context.getBeanDefinitionNames())
				.forEach(System.out::println);
		System.out.println(context.getBean(BusinessCalculationService.class).findMax());
	}
}
