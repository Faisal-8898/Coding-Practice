package com.practice.proxies;

import com.practice.model.Comment;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

@Component
@Qualifier("APPBAR")
public class AppbarCommentNotificationService implements CommentNotificationProxy {
    @Override
    public void sendComment(Comment comment) {
        System.out.println("Sending notification for AppBar: " + comment.getText());
    }
}
