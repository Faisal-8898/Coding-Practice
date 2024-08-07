<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<html>
    <head>
        <link href="webjars/bootstrap/5.3.3/css/bootstrap.min.css" rel="stylesheet">
        <title>List Todos Page</title>
    </head>
    <body>
        <h3>Welcome to the Today todo!</h3>
        <hr>
        <div class="container">
        <h1>Your todos:</h1>
    <table class="table">
        <thead>
        <tr>
            <th>id</th>
            <th>Title</th>
            <th>Target Date</th>
            <th>is Done?</th>
        </tr>
        </thead>
        <tbody>
        <c:forEach items="${todos}" var="todo">
            <tr>
                <td>${todo.id}</td>
                <td>${todo.title}</td>
                <td>${todo.targetDate}</td>
                <td>${todo.done}</td>
            </tr>
        </c:forEach>
        </tbody>
    </table>
            <a href="add-todo" class="btn btn-success">Add todo</a>
        </div>
        <script src="webjars/bootstrap/5.3.3/js/bootstrap.min.js"></script>
        <script src="webjars/jquery/3.6.0/jquery.min.js"></script>
    </body>
</html>