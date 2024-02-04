import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // fetch data when component mounts
    fetchAllTodos();
  }, []);

  // fetch all todos from server
  const fetchAllTodos = async () => {
    try {
      const response = await axios.get("http://localhost:3000/todos");
      setTodos(response.data);
    } catch (error) {
      console.error("error to get todos", error);
    }
  };

  return (
    <>
      <div>
        <h1>Easy Todo App</h1>
        Title: <input type="text" />
        <br />
        Description: <input type="text" />
        <h2>All Todos:</h2>
        {todos.map((todo) => (
          <Todo title={todo.title} description={todo.description}></Todo>
        ))}
      </div>
    </>
  );
}

function Todo(props) {
  // Add a delete button here so user can delete a TODO.
  return (
    <div>
      {props.title}
      <br />
      {props.description}
    </div>
  );
}

export default App;
