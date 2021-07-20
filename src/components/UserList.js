import { useEffect, useState } from "react";
import User from "./User";
import uuid from "react-uuid";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const url =
      "https://randomuser.me/api/?inc=email,gender,name,picture&results=10";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.results);
        console.log(data);
      });
  }, []);
  return (
    <ul>
      {users.map((userInfo) => {
        return <User key={uuid()} userInfo={userInfo} />;
      })}
    </ul>
  );
}
export default UserList;
