package com.example.demo.repositories;

import com.example.demo.models.Comment;
import org.springframework.stereotype.Component;

/** DBCommentRepository */
@Component
public class DBCommentRepository implements CommentRepository {

  @Override
  public void storeComment(Comment comment) {
    System.out.println("Storing comment: " + comment.text);
  }
}
