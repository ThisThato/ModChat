import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const UserList = () => {
  const context = useContext(GlobalContext);

  console.log(context);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {context.users.map((user) => (
          <li>{user.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
