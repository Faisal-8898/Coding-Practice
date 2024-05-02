package com.exampleinspring.learnspringwork.game;

import org.springframework.stereotype.Component;

@Component
public class Packer implements GamingConsole{
    public void up(){
        System.out.println("Jump");
    }
    public void down(){
        System.out.println("Go to hole");
    }
    public void left(){
        System.out.println("Go left");
    }
    public void right() {
        System.out.println("Go right");
    }
}
