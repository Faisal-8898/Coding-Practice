package com.exampleinspring.learnspringwork;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import java.util.function.Supplier;

public class MainSpringContext {
    public static void main(String[] args){
//        var context = new AnnotationConfigApplicationContext(ParrotConfig.class);

//        Parrot myParrot = new Parrot();
//        myParrot.name = "nikki";
//        Supplier<Parrot> parrotSupplier = () -> myParrot;
//        context.registerBean("parrot1", Parrot.class, parrotSupplier);
//        Parrot p = context.getBean("parrot1" ,Parrot.class);
//        System.out.println(p.name);

        var context = new AnnotationConfigApplicationContext(ParrotConfig.class);

        Person person =
                context.getBean(Person.class);
//        Parrot parrot =
//                context.getBean(Parrot.class);

//        System.out.println(person.getName());
//        System.out.println(parrot.getNam());
        System.out.println(
                person.getName()+"'s parrot: " + person.getParrot());
    }
}
