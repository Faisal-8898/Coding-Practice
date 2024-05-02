package BeanScopeApplication;

import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Component
class NormalClass {

}

@Scope(value= ConfigurableBeanFactory.SCOPE_PROTOTYPE)
@Component
class Prototype {

}

@Configuration
@ComponentScan
public class BeanScopeApplication {
	public static void main(String[] args) {
		var context = new AnnotationConfigApplicationContext(BeanScopeApplication.class);
	}
}
