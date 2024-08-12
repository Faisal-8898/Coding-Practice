package com.harkirat._class;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

@SpringBootApplication
public class Application {

  public static void main(String[] args) {
    SpringApplication.run(Application.class, args);
  }

  @RestController
  class HelloWorldController {
    @GetMapping("/")
    public String hello() {
      return "Hello World";
    }
  }

  @RestController
  class myNameIsKhan {
    @GetMapping("/hello")
    public String myName() {
      return "Faisal";
    }
  }
}
