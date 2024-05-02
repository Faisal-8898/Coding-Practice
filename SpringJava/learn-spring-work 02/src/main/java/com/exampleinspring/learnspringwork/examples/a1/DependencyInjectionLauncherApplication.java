package com.exampleinspring.learnspringwork.examples.a1;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Component
class YourBusinessClass{
    Dependency1 dep1;
    Dependency2 dep2;

    public YourBusinessClass(Dependency1 dep1, Dependency2 dep2) {
        this.dep1 = dep1;
        this.dep2 = dep2;
    }

    public void setDep1(Dependency1 dep1) {
        this.dep1 = dep1;
    }

    public void setDep2(Dependency2 dep2) {
        this.dep2 = dep2;
    }

    public String toString(){
    return "Dep1 Dep2 in here brother" + dep1 + " " + dep2;
}
}

@Component
class Dependency1{

}

@Component
class Dependency2{

}

@Configuration
@ComponentScan
public class DependencyInjectionLauncherApplication {
    public static void main(String[] args){
        var context = new AnnotationConfigApplicationContext(DependencyInjectionLauncherApplication.class);

        Arrays.stream(context.getBeanDefinitionNames())
                .forEach(System.out::println);
        for (String name : context.getBeanDefinitionNames()){
            System.out.println(name);
        }
        System.out.println(context.getBean(YourBusinessClass.class));
    }
}
