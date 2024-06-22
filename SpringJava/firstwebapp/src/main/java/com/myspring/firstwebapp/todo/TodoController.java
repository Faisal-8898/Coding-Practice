package com.myspring.firstwebapp.todo;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
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
        model.addAttribute("todos", todos);
        return "listTodos";
    }

    @RequestMapping(value= "add-todo", method = RequestMethod.GET)
    public String showTodoPage(ModelMap model){
        String username = (String)model.get("name");
        Todo todo = new Todo(0,username, "", LocalDate.now().plusMonths(3), false);
        model.put("todo", todo);
        return "addTodo";
    }

    @RequestMapping(value= "add-todo", method = RequestMethod.POST)
    public String addTodo(@ModelAttribute("todo") Todo todo, @RequestParam String title, ModelMap model){
        todoService.addTodo((String)model.get("name"), title, LocalDate.now().plusMonths(6), false);
        return "redirect:list-todos";
    }

}
