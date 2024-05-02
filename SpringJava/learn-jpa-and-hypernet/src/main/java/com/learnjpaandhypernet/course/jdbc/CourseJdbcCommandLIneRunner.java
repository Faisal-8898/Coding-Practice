package com.learnjpaandhypernet.course.jdbc;

import com.learnjpaandhypernet.Course;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class CourseJdbcCommandLIneRunner implements CommandLineRunner {
    @Autowired
    private CourseJdbcRepo repo;

    @Override
    public void run(String... args) throws Exception {
        repo.insert(new Course(6, "ami khai", "Faisal"));
        repo.insert(new Course(7, "nari khai", "Arafat"));
    }
}
