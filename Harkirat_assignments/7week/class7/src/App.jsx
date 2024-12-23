import React, { useState, Suspense, useContext } from "react";
import "./App.css";
import { CountContext } from "./Context";
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { countAtom, description, title } from "./store/atoms/count";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Todo />
        <ShowTodo />
      </RecoilRoot>
    </div>
  );
}

function Count() {
  return (
    <div>
      <Countrenderer />
      <Buttons />
    </div>
  );
}

function Todo() {
  const [todoTitle, setTodoTitle] = useRecoilState(title);
  const [todoDescription, setTodoDescription] = useRecoilState(description);

  const handleAddTodo = () => {
    // Perform any actions for adding the todo item here if needed

    // Clear the input fields
    setTodoTitle("");
    setTodoDescription("");
  };
  return (
    <div>
      <input
        placeholder="todo's title"
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
      />
      <br />
      <input
        placeholder="todo's description"
        value={todoDescription}
        onChange={(e) => setTodoDescription(e.target.value)}
      />
      <br />
      <button onClick={handleAddTodo}>add todo </button>
    </div>
  );
}

function ShowTodo() {
  const title = useRecoilValue(title);
  const description = useRecoilValue(description);

  return (
    <div>
      {title}
      {description}
    </div>
  );
}

function Countrenderer() {
  const count = useRecoilValue(countAtom);
  return <div>{count}</div>;
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  return (
    <div>
      <button
        onClick={() => {
          setCount((preCount) => preCount + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount((preCount) => preCount - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}
export default App;
