import React, { useCallback, useMemo } from "react";
import HomeChild from "./HomeChild";

function Home() {
  let [counter, setCounter] = React.useState(0);
  let [counter2, setCounter2] = React.useState(0);

  let incCount2 = useCallback(() => {
    setCounter2(counter2 + 1);
  }, [counter2]);

  let result = useMemo(() => {
    return counter % 5 === 0 ? "Yes" : "No";
  }, [counter]);

  return (
    <center>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>INC</button>
      Home <HomeChild result={result} incCount2={incCount2} />
    </center>
  );
}

export default Home;

// redux and thunk
// auth and jwt & code splitting
// testing & internationalization
