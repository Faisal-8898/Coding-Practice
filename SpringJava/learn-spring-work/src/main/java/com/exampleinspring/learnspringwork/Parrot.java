package com.exampleinspring.learnspringwork;

import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

@Component
public class Parrot {
    String name = "muku";

    public Parrot(){
        System.out.println("Hello I am constructor from Parrot Class");
    }

//    @PostConstruct
//    public void init(){
//        this.name = "kiki";
//}

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    public String toString(){
        return "Parrot : " + name;
    }
}
