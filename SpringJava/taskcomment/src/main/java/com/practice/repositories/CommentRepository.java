package com.practice.repositories;

import com.practice.model.Comment;

public interface CommentRepository {
    void storeComment(Comment comment);
}
