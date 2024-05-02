package com.exampleinspring.learnspringwork.helloworld;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class App02HelloWorldSpring {
    public static void main(String[] args){
        // Launch a spring context
        var context = new AnnotationConfigApplicationContext(HelloWorldConfguration.class);
        // Configure those things that we want Spring to manage
        System.out.println( context.getBean("name"));
        System.out.println(context.getBean("person"));
    }
}
