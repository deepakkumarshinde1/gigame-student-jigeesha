import { createContext, useContext, useState } from "react";

// create context
let CounterContext = createContext({});

// create hook ( custom hook )
// start use word
// there must be mini 1 hook call in this hook
export function useCounterContext() {
  let context = useContext(CounterContext);
  return context;
}

// create wrapper comp
export function CounterContextProvider({ children }) {
  const [count, setCount] = useState(0);

  let shared = { count, setCount };
  return (
    <CounterContext.Provider value={shared}>{children}</CounterContext.Provider>
  );
}
