import React from "react";
// server component

interface User {
  id: number;
  name: string;
}

export const NewUserPage = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users", {cache:'no-store'});
  const users: User[] = await res.json();
  return (
    <>
      <h1>Users</h1>
      <p>{new Date().toTimeString()}</p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};
export default NewUserPage;
