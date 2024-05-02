package com.learnjpaandhypernet.course.jdbc;

import jakarta.persistence.EntityManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class CourseRepoManage {
    @Autowired
    private EntityManager entityManager;
}
