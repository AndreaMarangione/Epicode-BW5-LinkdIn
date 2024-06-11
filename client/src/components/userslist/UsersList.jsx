import React from "react";
import UserElement from "../userelement/UserElement";
import "./userslist.css";

const UsersList = ({ data }) => {

  return (
    <ul className="p-0 users-list">
      {data.map((user, indx) => (
          <UserElement
            key={"user" + indx}
            image={user.image}
            name={user.name}
            surname={user.surname}
            title={user.title}
            userId={user._id}
          />
        ))}
    </ul>
  );
};

export default UsersList;
