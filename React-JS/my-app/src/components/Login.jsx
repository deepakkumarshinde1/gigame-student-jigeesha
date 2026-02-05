import { useState } from "react";
import "../css/login.css";
import Input from "./Input";

function Login() {
  let [text, setText] = useState(""); // [value, updateFunction]
  let [toggle, setToggle] = useState(false);
  let [user, setUser] = useState({ username: "", password: "" });
  let [list, setList] = useState([]);

  let handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  return (
    <>
      <div className="login-container">
        <div className="login-card">
          <h2 className="login-title">Login</h2>

          <Input
            handleChange={handleChange}
            value={user.username}
            name="username"
          />
          <Input
            handleChange={handleChange}
            value={user.password}
            name="password"
            type="password"
          />

          <button className="login-btn">Sign In</button>
        </div>
      </div>
    </>
  );
}
export default Login;

// state => It is an object that holds data that may change
// over the lifetime of a component

// functional component => It is a JavaScript function that returns JSX
// come with hooks => useState, useEffect, useContext, etc.
// that allow us to manage state and side effects in functional components
// each hook start with "use" keyword
// and can only be called at the top level of a functional component
