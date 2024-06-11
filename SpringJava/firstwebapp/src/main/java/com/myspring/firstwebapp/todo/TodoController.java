package com.myspring.firstwebapp.todo;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.SessionAttributes;

import java.util.List;

@Controller
@SessionAttributes("name")
public class TodoController {
    private TodoService todoService;

    public TodoController(TodoService todoService) {
        super();
        this.todoService = todoService;
    }

    @RequestMapping(value="list-todos", method = RequestMethod.GET)
    public String allTodos(ModelMap model){
        List<Todo> todos = todoService.findByUsername("Faisal");
        model.put("todos", todos);
        return "listTodos";
    }

    @RequestMapping(value= "add-todo", method = RequestMethod.GET)
    public String showTodoPage(){
        return "addTodo";
    }

    @RequestMapping(value= "add-todo", method = RequestMethod.POST)
    public String addTodo(){
        return "redirect:list-todos";
    }
}
