package com.example.demo.services;

import com.example.demo.models.Comment;
import com.example.demo.repositories.CommentRepository;
import org.springframework.stereotype.Component;

/** CommentNotificationService */
@Component
public class CommentNotificationService {

  private final CommentRepository commentRepository;
  private final CommentNotificationProxy commentNotificationProxy;

  public commentService(
      CommentRepository commentRepository, CommentNotificationProxy commentNotificationProxy) {
    this.commentRepository = commentRepository;
    this.commentNotificationProxy = commentNotificationProxy;
  }

  public void publishComment(Comment comment) {
    commentRepository.storeComment(comment);
    commentNotificationProxy.sendComment(comment);
  }
}
