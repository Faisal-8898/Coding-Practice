package com.exampleinspring.learnspringwork.helloworld;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

record Person (String name, int age){ };
record Address (String road, String city){ };

@Configuration
public class HelloWorldConfguration {
    @Bean
    public String name(){
        return "Faisal";
    }
    @Bean
    public int age(){
        return 23;
    }
    @Bean
    public Person person() {
        return new Person("Faisal", 24);
    }
    @Bean
    public Address address(){
        return new Address("Shangbadik Road", "Dhaka");
    }
}
