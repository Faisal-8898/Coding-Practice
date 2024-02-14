import React, { useCallback, useEffect, useState, useRef } from "react";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const [passLength, setpassLength] = useState<number>(8);
  const [numberAllowed, setNumberAllowed] = useState<boolean>(false);
  const [symbolAllowed, setSymbolAllowed] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");

  const passwordRef = useRef<HTMLInputElement>(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
    if (numberAllowed) str += "1234567890";
    if (symbolAllowed) str += "!@#$%^&*_-+=>>?~<";

    for (let i = 1; i <= passLength; i++) {
      const charIndex = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(charIndex);
    }

    setPassword(pass);
  }, [numberAllowed, symbolAllowed, setPassword, passLength]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current!.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [passLength, numberAllowed, symbolAllowed, passwordGenerator]);

  return (
    <div>
      <h1
        style={{ backgroundColor: "black" }}
        className="text-4xl text-center font-bold text-white p-4"
      >
        Password Generator
      </h1>
      <div className="flex flex-wrap  max-w-md mx-auto shadow-md rounded-lg p-4 my-14 text-white justify-center bg-neutral-600 ">
        <div className="flex shadow-lg rounded overflow-y-hidden p-6 ">
          <input
            type="text"
            value={password}
            className="flex outline-none w-full py-1 px-8 rounded mt-2 text-black"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            className="rounded-lg py-2 px-3 bg-teal-950 shrink-0 ml-2"
            onClick={copyPasswordToClipboard}
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={100}
              value={passLength}
              className="coursor pointer"
              onChange={(e) => {
                setpassLength(Number(e.target.value));
              }}
            />
            <label>Length: {passLength}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={symbolAllowed}
              id="symbolInput"
              onChange={() => {
                setSymbolAllowed((prev) => !prev);
              }}
            />
            <label>Symbol</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
