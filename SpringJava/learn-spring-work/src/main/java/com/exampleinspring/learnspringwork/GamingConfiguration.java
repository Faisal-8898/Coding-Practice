package com.exampleinspring.learnspringwork;

import com.exampleinspring.learnspringwork.game.GameRunner;
import com.exampleinspring.learnspringwork.game.GamingConsole;
import com.exampleinspring.learnspringwork.game.Packer;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class GamingConfiguration {
    @Bean
    public GamingConsole game (GamingConsole game) {
        return new Packer();
    }
    public GameRunner gameRunner (GamingConsole game){
       return new GameRunner(game);
    }
}
