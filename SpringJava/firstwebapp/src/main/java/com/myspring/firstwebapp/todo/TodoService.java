package com.myspring.firstwebapp.todo;

import java.time.LocalDate;
import java.util.*;
import org.springframework.stereotype.Service;

@Service
public class TodoService {
    private static List<Todo> todos = new ArrayList<>();
    private static int todoCount=0;
    static {
        todos.add(new Todo(++todoCount,"Faisal","Want to build trelet",
                LocalDate.now().plusMonths(6), false));
        todos.add(new Todo(++todoCount,"Faisal","need backend of flowra",
                LocalDate.now().plusMonths(6), false));
        todos.add(new Todo(++todoCount,"Faisal","need to target GSOC",
                LocalDate.now().plusMonths(6), false));
    }

    public List<Todo> findByUsername(String username){
        return todos;
    }

    public void addTodo(String username, String title, LocalDate targetdate, boolean isDone){
        Todo todo = new Todo(++todoCount, username, title, targetdate, isDone);
        todos.add(todo);
    }
}
