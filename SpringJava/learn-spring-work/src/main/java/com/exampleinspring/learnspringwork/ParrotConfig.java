package com.exampleinspring.learnspringwork;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Bean;


@Configuration
public class ParrotConfig {

    @Bean
    public Parrot parrot(){
        Parrot p =new Parrot();
        p.setName("kuku");
        return p;
    }

    @Bean
    public Person person(Parrot parrot){
        Person person = new Person();
        person.setName("Faisal");
        person.setParrot(parrot);
        return person;
    }
}
