package com.learning.springboot.learnspringboot;

public class Course {
    int id;
    private String name;

    public Course(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String toString(){
        return "Course=[ id =" + id + "name: " + name + "]";
    }
}
