<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<html>
<head>
    <link href="webjars/bootstrap/5.3.3/css/bootstrap.min.css" rel="stylesheet">
    <title>List Todos Page</title>
</head>
<body>
<h3>Add your todo:</h3>
<hr>
<div class="container">
    <form method="post">
    Title: <input type="text" name="title">
        <input type="submit" class="btn btn-success">
    </form>
</div>
<script src="webjars/bootstrap/5.3.3/js/bootstrap.min.js"></script>
<script src="webjars/jquery/3.6.0/jquery.min.js"></script>
</body>
</html>