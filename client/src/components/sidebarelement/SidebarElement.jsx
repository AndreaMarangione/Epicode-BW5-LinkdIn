import React from "react";
import './sidebarelement.css'

const SidebarElement = ({levelTitle, sectionTitle, children}) => {
  return (
    <section className="bg-white rounded-3 border mb-2 pt-3">
      <div className="section__header d-flex justify-content-between align-items-center px-3">
        <h4 className={`${levelTitle ? levelTitle : ""} fw-semibold m-0 `}>
          {sectionTitle}
        </h4>
        <div className="section__header__buttons d-flex align-items-center "></div>
      </div>
      <div className="section__body px-3">
        {children}
      </div>
      <div className="section__footer border-top py-2 w-100 text-center ">
        <a className="fw-semibold text-decoration-none text--gray">Mostra tutto</a>
      </div>
    </section>
  );
};

export default SidebarElement;
