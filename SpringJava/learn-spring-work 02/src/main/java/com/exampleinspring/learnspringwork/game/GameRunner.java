package com.exampleinspring.learnspringwork.game;

import org.springframework.stereotype.Component;

@Component
public class GameRunner {
    GamingConsole game;
    public GameRunner(GamingConsole game){
        this.game = game;
    }
    public void run (){
        game.down();
        game.up();
        game.right();
        game.left();
        System.out.println("Running gamig:" + game);
    }
}
