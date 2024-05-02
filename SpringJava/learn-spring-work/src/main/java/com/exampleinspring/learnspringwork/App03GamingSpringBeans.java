package com.exampleinspring.learnspringwork;

import com.exampleinspring.learnspringwork.game.GameRunner;
import com.exampleinspring.learnspringwork.game.GamingConsole;
import com.exampleinspring.learnspringwork.game.MarioGame;
import com.exampleinspring.learnspringwork.game.SuperContra;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class App03GamingSpringBeans {
    public static void main(String[] args){
        var context = new AnnotationConfigApplicationContext(GamingConfiguration.class);
        context.getBean(GamingConsole.class).up();
    }
}
