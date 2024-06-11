import React from "react";
import ActionButton from "../actionbutton/ActionButton";
import { showModalExp } from "../../redux/modalExpSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProfileSection = ({
  sectionTitle,
  levelTitle,
  children,
  actions,
  addButton,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <section className="bg-white rounded-3 p-4 border mb-2">
      <div className="section__header d-flex justify-content-between align-items-center ">
        <h3 className={`${levelTitle ? levelTitle : ""} fw-semibold`}>
          {sectionTitle}
        </h3>
        {addButton && (
          <ActionButton
            iconName={"add"}
            onClick={() => {
              dispatch(showModalExp())

            }}
          />
        )}
        {actions && (
          <div className="section__header__buttons d-flex align-items-center ">
            <ActionButton
              iconName={"add"}
              onClick={() => dispatch(showModalExp())}
            />
            <ActionButton
              iconName={"pencil-outline"}
              onClick={() => navigate(`/editexperiences/${true}`)}
            />
          </div>
        )}
      </div>
      <div className="section__body pt-3 ">{children}</div>
    </section>
  );
};

export default ProfileSection;
