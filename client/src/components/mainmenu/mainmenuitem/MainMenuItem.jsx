import React from "react";
import { Link } from "react-router-dom";
import "./mainmenuitem.css";

const MainMenuItem = ({ iconName, label, to }) => {
  return (
    <li className="main-menu__item nav-item ">
      <Link
        to={to}
        className="d-flex flex-column align-items-center nav-link p-0 justify-content-between "
      >
        <ion-icon name={iconName}></ion-icon>
        <span className="small d-none d-md-block ">{label}</span>
      </Link>
    </li>
  );
};

export default MainMenuItem;
