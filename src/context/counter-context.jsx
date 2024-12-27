import React, { createContext, useMemo, useState } from "react";

export const CounterContext = createContext(0);

const ContextProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  const value = useMemo(() => {
    return { counter: [counter, setCounter] };
  }, [counter]);

  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
};

export default ContextProvider;
