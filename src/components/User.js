import "./User.css";

function User({ userInfo }) {
  console.log(userInfo);
  return (
    <li className={userInfo.gender}>
      <img src={userInfo.picture.medium} alt={userInfo.name.first} />
      {userInfo.name.title} {userInfo.name.first} {userInfo.name.last}
    </li>
  );
}

export default User;
