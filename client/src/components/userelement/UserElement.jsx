import React from "react";
import Avatar from "../avatar/Avatar";
import MainButton from "../mainbutton/MainButton";
import { useNavigate } from "react-router-dom";

const UserElement = ({image, name, surname, title, userId}) => {

  const navigate = useNavigate()

  return (
    <li className="list-group-item py-3 border-bottom ">
      <div className="row ">
        <div className="col-2 col-md-3 col-lg-2">
          <Avatar src={image} rounded />
        </div>
        <div className="col-10 col-md-9 col-lg-10">
          <div className="user-info ps-3  ">
            <h5 className="h6 m-0 ">
              {name} {surname}
            </h5>
            <span className="small d-block ">{title}</span>
            <MainButton onClick={() => navigate(`/user/${userId}`)}>
              <ion-icon name="person-add"></ion-icon>Collegati
            </MainButton>
          </div>
        </div>
      </div>
    </li>
  );
};

export default UserElement;
