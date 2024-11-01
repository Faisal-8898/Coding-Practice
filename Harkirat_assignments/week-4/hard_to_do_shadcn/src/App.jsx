import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Signup from "./Signup";
import Appbar from "./Appbar";
import Signin from "./Signin";

const App = () => {
  return (
    <Router>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "#eeeeee",
        }}
      >
        <Appbar />
        <Routes>
          <Route path="/login" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
