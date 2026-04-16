import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { useCounterContext } from "./context/counter.context";
import Button from "./Button";
import Users from "./Users";
import UserDetails from "./UserDetails";
import { UserContextProvider } from "./context/user.context";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./redux/slices/counter.slice";
import { getSingleUser, getUser } from "./redux/service/user.api.service";

function App() {
  let dispatch = useDispatch();
  let { count } = useSelector((state) => state.counter);
  useEffect(() => {
    dispatch(getUser());
    dispatch(getSingleUser(1));
  }, []);
  return (
    <>
      <section id="center">
        <h1>{count}</h1>
        <button onClick={() => dispatch(increment())}>INC</button>
        {/* <Button />
        <UserContextProvider>
          <Users />
          <UserDetails />
        </UserContextProvider> */}
      </section>
    </>
  );
}

export default App;
