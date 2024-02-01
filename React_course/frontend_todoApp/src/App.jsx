import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState(
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
  );

  setInterval(() => {
    setTodo({
      title: "hello bhai kemn achen!!",
    });
  }, 2000);

  return (
    <>
      <h1>Hello boys</h1>
      {JSON.stringify(todo)}
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
