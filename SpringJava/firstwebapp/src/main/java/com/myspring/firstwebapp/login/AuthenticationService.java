package com.myspring.firstwebapp.login;

import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {
    public boolean userAuthenticate(String name, String password){
        if(name.equalsIgnoreCase("faisal") && password.equalsIgnoreCase("hello") ){
            System.out.println(name+ password);
            return true;
        }
        return false;
    }
}
