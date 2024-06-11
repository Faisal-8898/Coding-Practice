package com.myspring.firstwebapp.login;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;

@Controller
@SessionAttributes("name")
public class LoginController {
    private AuthenticationService auth;

    public LoginController(AuthenticationService auth){
        super();
        this.auth = auth;
    }

    @RequestMapping(value="login", method = RequestMethod.GET)
    public String gotoLoginPage(){
        return "login";
    }

    @RequestMapping(value="login", method = RequestMethod.POST)
    public String loginToWelcome(@RequestParam String name, @RequestParam String password, ModelMap model){
        model.put("name", name);
        if(auth.userAuthenticate(name, password)){
            return "welcome";
        }
        return "login";
    }
}
