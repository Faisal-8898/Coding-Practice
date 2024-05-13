package com.autowire.practiceAutoWire;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan(basePackages = "com.autowire.practiceAutoWire")
public class ParrotConfig {
//    @Bean
//    public Parrot parrot(){
//        Parrot p = new Parrot();
//        return p;
//    }
}
