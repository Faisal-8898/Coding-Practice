package com.example.demo.services;

import com.example.demo.models.Comment;
import org.springframework.stereotype.Component;

/** EmailCommentNotificationProxy */
@Component
public class EmailCommentNotificationProxy implements CommentNotificationProxy {

  @Override
  public void sendComment(Comment comment) {
    System.out.println("Sending notification: " + comment.text);
  }
}
