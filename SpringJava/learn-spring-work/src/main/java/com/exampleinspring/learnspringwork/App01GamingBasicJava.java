package com.exampleinspring.learnspringwork;

import com.exampleinspring.learnspringwork.game.GameRunner;
import com.exampleinspring.learnspringwork.game.GamingConsole;
import com.exampleinspring.learnspringwork.game.MarioGame;
import com.exampleinspring.learnspringwork.game.SuperContra;

public class App01GamingBasicJava {
    public static void main(String[] args){
        //var marioGame = new MarioGame();
        GamingConsole marioGame = new MarioGame();
        GamingConsole SuperContra = new SuperContra();
        var gameRunner = new GameRunner(marioGame);
        var superContra = new GameRunner(SuperContra);
        gameRunner.run();
        superContra.run();
    }
}
