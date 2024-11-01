import React from "react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Card } from "./components/ui/card";

const Signin = () => {
  return (
    <div>
      <div
        style={{
          paddingTop: 125,
          marginBottom: 15,
          display: "flex",
          justifyContent: "center",
        }}
        className="text-xl"
      >
        Welcome back!. Sign in below.
      </div>
      <center>
        <Card className="w-[450px] h-[265px] p-10">
          <Input
            type={"text"}
            placeHolder="Username"
            className="w-11/12 h-14 border-b-2 rounded-sm border-gray-200"
          />
          <Input
            type={"password"}
            placeHolder="Password"
            className="w-11/12 mt-4 h-14 border-b-2 rounded-sm border-gray-200"
          />
          <br />
          <Button className="bg-blue-400 text-white w-32 h-10 rounded mb-5 hover:bg-blue-300">
            Sign in{" "}
          </Button>
        </Card>
      </center>
    </div>
  );
};

export default Signin;
