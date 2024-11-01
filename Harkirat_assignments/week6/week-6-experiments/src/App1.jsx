import { useState } from "react";
import "./App.css";

function App1() {
  const [header, setHeader] = useState("");
  return (
    <div>
      <button
        onClick={() => {
          const randomValue = Math.random();
          setHeader(randomValue);
        }}
      >
        click to change the header
      </button>
      <HeaderComponent title={header} />
      <HeaderComponent title="faisal bhai" />
    </div>
  );
}

const HeaderComponent = ({ title }) => {
  return <div>My name is {title}</div>;
};

export default App1;
