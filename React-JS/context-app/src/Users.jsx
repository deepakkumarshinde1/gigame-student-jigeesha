import { useUserContext } from "./context/user.context";

function Users() {
  let { users, setNewUserDetails } = useUserContext();
  return (
    <div>
      Users
      <ul>
        {users.map((user, index) => {
          return (
            <li
              className="user-name"
              key={user.id}
              style={{ cursor: "pointer" }}
              onClick={() => setNewUserDetails(index)}
            >
              {user.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Users;
