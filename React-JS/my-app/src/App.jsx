import { useEffect, useState } from "react";
import Login from "./components/Login";
import Users from "./components/Users";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Registration from "./components/Registration";
import About from "./components/About";
import ProtectedRouting from "./components/ProtectedRouting";
import PageNotFound from "./components/PageNotFound";

function App() {
  // let text = "Hello World!";
  let [toggle, setToggle] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setToggle(false);
    }, 5000);
  });
  return (
    <>
      {/* <h1 className="hello">Hello</h1>
      <h1>Welcome to React!</h1>
      <label htmlFor="username">Username:</label>
      <p>{text}</p>
      <input type="text" /> */}
      {/* <Login /> */}
      {/* {toggle ? <Users /> : null} */}

      {/* menu bar start */}
      <ul className="menu">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/create-account">Create Account</NavLink>
        </li>
        <li>
          <NavLink to="/users">Users</NavLink>
        </li>
      </ul>
      {/* menu bar end */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="" element={<ProtectedRouting type={1} />}>
          <Route path="/users" element={<Users />} />
        </Route>

        <Route path="" element={<ProtectedRouting type={0} />}>
          <Route path="/login" element={<Login />} />
          <Route path="/create-account" element={<Registration />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

// login / registration => isLogin (avoid avoid this page) else load

// users => isLogin (load) else avoid this page

export default App;

// JSX => JavaScript XML
// It is a syntax extension for JavaScript
// It allows us to write HTML-like code within JavaScript
// Babel is used to transpile JSX into regular JavaScript

// rules for writing JSX
// 1. JSX must have a single parent element
// 2. Use className instead of class
// 3. Use camelCase for event handlers
// 4. JSX expressions must be wrapped in curly braces {}
// 5. Self-closing tags must end with a slash />
