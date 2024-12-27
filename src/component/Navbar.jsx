import React, { useContext } from "react";
import { CounterContext } from "../context/counter-context";

function Navbar({ children }) {
  const counterData = useContext(CounterContext);
  const [counter, setCounter] = counterData.counter;
  const handleClick = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <>
      <div>
        <h1>Navbar</h1>
      </div>
      {children}
      <div>
        <button onClick={handleClick}>click</button>
      </div>
    </>
  );
}

export default Navbar;
