import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState([
    {
      title: "My first todo",
      description: "I love do somthing",
      id: 123,
    },
    {
      title: "want to go to gym",
      description: "gym at 7 pm",
      id: 987,
    },
    {
      title: "codeem",
      description: "short description",
      id: 674,
    },
    {
      title: "competitive programming",
      description: "don't do it",
      id: 987,
    },
  ]);

  return (
    <>
      {todo.map((todo) => {
        return (
          <div>
            <Todo title={todo.title} description={todo.description}></Todo>
            <br />
          </div>
        );
      })}
    </>
  );
}

function Todo(props) {
  return (
    <div style={{ background: "red" }}>
      {props.title}
      {props.description}
    </div>
  );
}

export default App;
