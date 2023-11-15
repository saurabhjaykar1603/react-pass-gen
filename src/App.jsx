import React, { useEffect } from "react";
import { useCallback, useState } from "react";

function App() {
  const [length, setLenght] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [Password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str += "0123456789";
    }
    if (characterAllowed) {
      str += "@#$%^&*()_+-=";
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator]);
  return (
    <>
      <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-8 py-4 my-10 bg-gray-800">
        <h1 className="text-center text-white py-5  font-semibold text-3xl  ">
          Password Generator 🔑
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            value={Password}
            type="text"
            className="outline-none w-full py-2 px-3"
            placeholder="password"
            readOnly
          />
          <button className="outline-none bg-green-600 px-4 py-05 shrink-0  font-bold">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2 ">
          <div className="flex items-center gap-x-1"></div>
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            id="lenght"
            onChange={(e) => {
              setLenght(e.target.value);
            }}
          />
          <label
            htmlFor="lenght"
            className=" text-slate-200 font-bold text-base "
          >
            Lenght : {length}
          </label>
          <div className="flex  items-center gap-x-2 ms-3">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label
              htmlFor="numberInput"
              className=" text-slate-200 font-bold text-base "
            >
              Number
            </label>
          </div>
          <div className="flex  items-center gap-x-2 ms-2">
            <input
              type="checkbox"
              defaultChecked={characterAllowed}
              id="charactorInput"
              onChange={() => {
                setCharacterAllowed((prev) => !prev);
              }}
            />
            <label
              htmlFor="charactorInput"
              className=" text-slate-200 font-bold text-base "
            >
              Charactor
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
