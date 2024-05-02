package com.exampleinspring.learnspringwork.game;

public class SuperContra implements GamingConsole{
    public void up(){
        System.out.println("Climb");
    }
    public void down(){
        System.out.println("dig");
    }
    public void left(){
        System.out.println("Go back");
    }
    public void right() {
        System.out.println("Shot");
    }
}
