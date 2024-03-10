import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    console.log("Fetching data..");
    fetch("http://localhost:3000/todos").then((response) => {
      response.json().then((data) => {
        setTodos(data);
      });
    });
  }, []);

  return (
    <div>
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            title={todo.title}
            description={todo.description}
          ></Todo>
        );
      })}
    </div>
  );
}

function Todo(props) {
  return (
    <div>
      {props.title}
      <br />
      {props.description}
    </div>
  );
}
export default App;
