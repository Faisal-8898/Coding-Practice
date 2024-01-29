import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState({
    title: "My first todo",
    description: "I love do somthing",
    id: 123,
  });

  setInterval(() => {
    setTodo({
      title: "hello bhai kemn achen!!",
    });
  }, 2000);

  return (
    <>
      <h1>Hello boys</h1>
      {todo.title}
      {todo.description}
      <Person firstName={"Faisal"} lastName={"Ahmed"}></Person>
    </>
  );
}

function Person(props) {
  return (
    <div>
      {props.firstName}
      {props.lastName}
    </div>
  );
}

export default App;
