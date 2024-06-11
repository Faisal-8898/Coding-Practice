package com.practice;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan (
        basePackages = {"com.practice.proxies", "com.practice.services", "com.practice.repositories"}
)
public class ProjectConfiguration {
}
