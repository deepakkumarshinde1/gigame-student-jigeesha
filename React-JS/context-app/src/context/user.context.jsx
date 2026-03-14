import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext({});

export function useUserContext() {
  const context = useContext(UserContext);
  return context;
}

export function UserContextProvider({ children }) {
  let [users, setUsers] = useState([]);
  let [userDetail, setUserDetails] = useState(null);

  let setNewUserDetails = (index) => {
    setUserDetails({ ...users[index] });
  };
  let getUser = async () => {
    let url = "https://jsonplaceholder.typicode.com/users";
    let { data } = await axios.get(url);
    setUsers(data);
  };

  useEffect(() => {
    console.log("hi");
    getUser();
  }, []);
  let shared = { users, setNewUserDetails, userDetail };
  return <UserContext.Provider value={shared}>{children}</UserContext.Provider>;
}
