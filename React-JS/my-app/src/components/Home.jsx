import React from "react";
import HomeChild from "./HomeChild";

function Home() {
  let [counter, setCounter] = React.useState(0);
  return (
    <center>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>INC</button>
      Home <HomeChild />
    </center>
  );
}

export default Home;
