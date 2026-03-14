import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { useCounterContext } from "./context/counter.context";
import Button from "./Button";
import Users from "./Users";
import UserDetails from "./UserDetails";
import { UserContextProvider } from "./context/user.context";

function App() {
  let { count } = useCounterContext();
  return (
    <>
      <section id="center">
        <h1>{count}</h1>
        <Button />
        <UserContextProvider>
          <Users />
          <UserDetails />
        </UserContextProvider>
      </section>
    </>
  );
}

export default App;
