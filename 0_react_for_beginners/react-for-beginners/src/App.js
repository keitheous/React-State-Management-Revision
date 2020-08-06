import React, { useState } from "react";
import Tweet from "./Tweet"

function App() {
  const [isRed, setRed] = useState(false) // boolean
  const [count, setCount] =  useState(0) // integer

  const increment = () => {
    setCount(count + 1);
    setRed(!isRed);
  };

  return (
    <div className="app">
      <button onClick={increment}>Increment</button>
      <h1 class={isRed ? 'red-header' : ''}>{count}</h1>
    </div>
  );
}

export default App
