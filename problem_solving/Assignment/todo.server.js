const path = require("path");
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

let todos = [];
let id = 1;
app.get("/todos", (req, res) => {
  res.json(todos);
});

app.get("/todos/:id", (req, res) => {
  const todo = todos.find((t) => t.id === parseInt(req.params.id));
  if (!todo) {
    res.status(404).send();
  } else {
    res.json(todo);
  }
});

app.post("/todos", (req, res) => {
  const newTodo = {
    id: id++, // unique random id
    title: req.body.title,
    description: req.body.description,
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.put("/todos/:id", (req, res) => {
  const todoIndex = todos.findIndex((t) => t.id === parseInt(req.params.id));
  if (todoIndex === -1) {
    res.status(404).send();
  } else {
    todos[todoIndex].title = req.body.title;
    todos[todoIndex].description = req.body.description;
    res.json(todos[todoIndex]);
  }
});

app.delete("/todos/:id", (req, res) => {
  const todoIndex = todos.findIndex((t) => t.id === parseInt(req.params.id));
  if (todoIndex === -1) {
    res.status(404).send();
  } else {
    todos.splice(todoIndex, 1);
    res.status(200).send();
  }
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// for all other routes, return 404
// app.use((req, res, next) => {
//   console.log("hello who are you!");
//   res.status(404).send();
// });

app.listen(4000, () => {
  console.log("hello I am the server");
});
