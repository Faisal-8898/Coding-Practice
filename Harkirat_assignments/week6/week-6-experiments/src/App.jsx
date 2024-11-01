import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [sum, setSum] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios.get("https://dummyjson.com/todos").then((res) => {
      console.log(res.data.todos);
      setTodos(res.data.todos);
    });
  }, []);

  let counter = useMemo(() => {
    let counter = 0;
    for (let i = 1; i <= sum; i++) {
      counter = counter + i;
    }
    return counter;
  }, [sum]);

  return (
    <div>
      Number :
      <input
        type="text"
        onChange={(e) => {
          setSum(e.target.value);
        }}
      />
      <br />
      The sum from 1 to {sum} is {counter}
      <br />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        count({count})
      </button>
    </div>
  );
};
const Todo = ({ title, description }) => {
  return <></>;
};
export default App;
