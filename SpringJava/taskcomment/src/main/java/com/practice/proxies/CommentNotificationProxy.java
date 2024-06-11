package com.practice.proxies;

import com.practice.model.Comment;

public interface CommentNotificationProxy {
    public void sendComment(Comment comment);
}
