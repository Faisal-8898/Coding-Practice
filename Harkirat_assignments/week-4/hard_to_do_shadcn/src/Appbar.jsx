import React from "react";
import { Button } from "./components/ui/button";
import { useNavigate } from "react-router-dom";

const Appbar = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>
        <h3 className="mt-10 p-2 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Coursera
        </h3>
      </div>
      <div className="mr-8 p-2">
        <Button
          className="mr-3  bg-blue-500 text-white w-28 rounded mb-5 hover:bg-blue-400"
          onClick={() => {
            navigate("/login");
          }}
        >
          {" "}
          Signin{" "}
        </Button>
        <Button
          className="bg-blue-500 text-white w-28 rounded mb-5 hover:bg-blue-400"
          onClick={() => {
            navigate("/signup");
          }}
        >
          {" "}
          Signup{" "}
        </Button>
      </div>
    </div>
  );
};

export default Appbar;
