package com.learnjpaandhypernet.course.jdbc;

import com.learnjpaandhypernet.Course;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class CourseJdbcRepo {
    private static String INSERT_QUERY = """
            INSERT INTO COURSE (id, name, author)
            VALUES(?, ?, ?);
            """;
    @Autowired
    private JdbcTemplate springJdbcTemp;

    public void insert(Course course) {
        springJdbcTemp.update(INSERT_QUERY, course.getId(), course.getName(), course.getAuthor());
    }
}
