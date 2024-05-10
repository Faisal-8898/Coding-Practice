package com.exampleinspring.learnspringwork;

import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

@Component
public class Parrot {
    String name;

    @PostConstruct
    public void init(){
        this.name = "kiki";
    }
}
