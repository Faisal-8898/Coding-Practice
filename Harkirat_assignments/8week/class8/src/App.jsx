import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="grid grid-cols-12">
        <div className="bg-red-600 col-span-12 sm:col-span-6 md:col-span-4">
          hi{" "}
        </div>
        <div className="bg-yellow-400 bg-red-600 col-span-12 sm:col-span-6 md:col-span-4">
          hello{" "}
        </div>
        <div className="bg-green-500 bg-red-600 col-span-12 sm:col-span-6 md:col-span-4">
          whatsapp{" "}
        </div>
      </div>
    </>
  );
}

export default App;
