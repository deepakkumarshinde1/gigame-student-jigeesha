import axios from "axios";
import { useEffect, useState } from "react";

function Users() {
  let [users, setUser] = useState([]);
  let [counter, setCounter] = useState(0);
  let getUsers = async () => {
    let { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );
    setUser(data);
  };

  let removeElement = (index) => {
    let newUser = JSON.parse(JSON.stringify(users)); // deep clone
    newUser.splice(index, 1);
    setUser(newUser);
  };
  useEffect(() => {
    getUsers();

    let intervalId = setInterval(() => {
      console.log("interval");
    }, 1000);

    // unmounting
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    console.log("counter");
  }, [counter]);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>INC {counter}</button>
      {users.map((value, index) => {
        return (
          <p key={value.id}>
            {value.name}{" "}
            <button onClick={() => removeElement(index)}>delete</button>
          </p>
        );
      })}
    </div>
  );
}

export default Users;
