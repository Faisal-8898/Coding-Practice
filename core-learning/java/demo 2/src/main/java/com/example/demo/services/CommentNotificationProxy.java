package com.example.demo.services;

import com.example.demo.models.Comment;

/** CommentNotificationService */
public interface CommentNotificationProxy {

  public void sendComment(Comment comment);
}
