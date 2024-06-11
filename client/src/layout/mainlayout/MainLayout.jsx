import React from "react";
import Header from "../header/Header";
import Main from "../main/Main";
import Sidebar from "../sidebar/Sidebar";
import Footer from "../footer/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container-lg py-5">
        <div className="row py-5 ">
          <Main>{children}</Main>
          <Sidebar />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
