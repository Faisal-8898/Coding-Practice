package com.autowire.practiceAutoWire;

import org.springframework.stereotype.Component;

@Component
public class Parrot {
    private String name = "muku";

    @Override
    public String toString(){
        return "Parrot :" + name;
    }
}
