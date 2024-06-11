package com.practice.taskcomment;

import com.practice.ProjectConfiguration;
import com.practice.model.Comment;
import com.practice.proxies.EmailCommentNotificationProxy;
import com.practice.repositories.DBCommentRepository;
import com.practice.services.CommentService;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

@SpringBootApplication
public class TaskcommentApplication {

	public static void main(String[] args) {
		var context =
				new AnnotationConfigApplicationContext(ProjectConfiguration.class);

//		var commentRepo = new DBCommentRepository();
//		var commentNotification = new EmailCommentNotificationProxy();
//
//		var commentService = new CommentService(commentRepo, commentNotification);

		var comment  = new Comment();
		comment.setAuthor("Faisal Ahmed");
		comment.setText("bro, the book is f");
		var commentService = context.getBean(CommentService.class);
		commentService.publishComment(comment);
	}

}
