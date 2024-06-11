package com.myspring.firstwebapp.todo;

import java.time.LocalDate;
import java.util.*;
import org.springframework.stereotype.Service;

@Service
public class TodoService {
    private static List<Todo> todos = new ArrayList<>();
    static {
        todos.add(new Todo(1,"Faisal","Want to build trelet",
                LocalDate.now().plusMonths(6), false));
        todos.add(new Todo(2,"Faisal","need backend of flowra",
                LocalDate.now().plusMonths(6), false));
        todos.add(new Todo(3,"Faisal","need to target GSOC",
                LocalDate.now().plusMonths(6), false));
    }

    public List<Todo> findByUsername(String username){
        return todos;
    }
}
