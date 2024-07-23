package com.example.demo.repositories;

import com.example.demo.models.Comment;

/** CommentRepository */
public interface CommentRepository {

  void storeComment(Comment comment);
}
