package com.practice.services;

import com.practice.proxies.CommentNotificationProxy;
import com.practice.repositories.CommentRepository;
import com.practice.model.Comment;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

@Service
public class CommentService{
    private final CommentRepository commentRepository;
    private final CommentNotificationProxy commentNotificationProxy;

    public CommentService(
            CommentRepository commentRepository,
            @Qualifier("APPBAR") CommentNotificationProxy commentNotificationProxy) {
       this.commentRepository = commentRepository;
       this.commentNotificationProxy = commentNotificationProxy;
    }

    public void publishComment(Comment comment){
        commentRepository.storeComment(comment);
        commentNotificationProxy.sendComment(comment);
    }

}