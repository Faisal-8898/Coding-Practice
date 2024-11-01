import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

const Signup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card
        style={{
          width: 400,
        }}
        className="items-center m-20 p-10 bg-gray-50 rounded-lg"
      >
        <center>
          <div
            style={{
              marginTop: 30,
              marginBottom: 10,
            }}
          >
            welcome to faiaz gaming house the world of gaming
          </div>
        </center>
        <center>
          <div
            style={
              {
                //border: "2px solid black",
              }
            }
          >
            <Input type="email" placeholder="Email" />
            <br />
            <Input type="password" placeholder="Password" />
            <br />
            <Button variant="outline" className="bg-blue-500 text-white">
              Sign Up
            </Button>
          </div>
        </center>
      </Card>
    </div>
  );
};

export default Signup;
