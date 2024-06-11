import React from "react";
import Avatar from "../avatar/Avatar";
import { useParams } from "react-router-dom";
import ActionButton from "../actionbutton/ActionButton";
import { showModalExp, setEditExpState } from "../../redux/modalExpSlice";
import { selectAnExperience } from "../../redux/experienceSelectedSpice";
import { useDispatch } from "react-redux";

const ExperienceElement = ({idExp, image, role, company, area, startDate, endDate, description}) => {
  const {edit} = useParams()
  const dispatch = useDispatch()
  return (
    <li className=" list-group-item mb-4 pb-3 border-bottom">
      <div className="row g-3 g-md-0 g-lg-5 g-xxl-0 ">
        <div className="col-2 col-lg-1 ">
          <Avatar src={image} alt={'Experience img'} />
        </div>
        <div className="col-10 col-lg-11">
          <div className="heading lh-sm ps-1 small ">
            {edit && <div className="float-end "><ActionButton iconName={'pencil'} onClick={() => {
              dispatch(showModalExp())
              dispatch(selectAnExperience(idExp))
              dispatch(setEditExpState())
            }}/></div>}
            <h5 className="h6 mb-1 fw-semibold ">{role}</h5>
            <span className="d-block">{company}</span>
            <span className="text-secondary ">
              {new Date(startDate).toLocaleDateString("it-it", {
                year: "numeric",
                month: "short",
              })}{" "}
              -{" "}
            </span>
            <span className="text-secondary">
              {new Date(endDate).toLocaleDateString("it-it", {
                year: "numeric",
                month: "short",
              })}
            </span>
            <span className="text-secondary d-block ">{area}</span>
          </div>
          <p className="mt-2 mb-0 ps-1">{description}</p>
        </div>
      </div>
    </li>
  );
};

export default ExperienceElement;
