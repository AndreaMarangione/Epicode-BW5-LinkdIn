import React from "react";
import { Link } from "react-router-dom";
import MainMenu from "../mainmenu/MainMenu";
import SearchForm from "../searchform/SearchForm";

const TopNavbar = () => {
  return (
    <div className="navbar navbar-expand-md p-0 justify-content-between border-end pe-2">
      <div className="d-flex py-2 ">
        <Link to={"/"} className="navbar-brand py-0">
          <img
            src="/In-Blue-96@2x.png"
            alt="LinkedIn logo"
            className="logo"
            height={36}
            width={36}
          />
        </Link>
        <SearchForm />
      </div>
      <MainMenu />
    </div>
  );
};

export default TopNavbar;
