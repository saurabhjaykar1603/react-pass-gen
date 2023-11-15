import React from "react";
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
  }, [length, numberAllowed, characterAllowed, setPassword]);

  return (
    <>
      <div className="w-100 h-screen bg-slate-800">
        <h1 className="text-4xl text-center pt-4 text-white">
          Password Generator
        </h1>
      </div>
    </>
  );
}

export default App;
