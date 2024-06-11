import React from "react";
import { useGetExperiencesQuery } from "../../api/experienceApi";

import "./experienceslist.css";
import ExperienceElement from "../experienceelement/ExperienceElement";

const ExperiencesList = ({ userId }) => {
  const { isLoading, data, error } = useGetExperiencesQuery(userId);

  return (
    <ul className="p-0 experiences-list">
      {isLoading && <span>Caricamento...</span>}
      {error && <span>Ops...Qualcosa è andato storto!</span>}
      {!isLoading && data &&
        data.map((exp, indx) => (
          <ExperienceElement
            idExp={exp._id}
            image={exp.image || 'https://placebeard.it/400'}
            key={"exp" + indx}
            role={exp.role}
            company={exp.company}
            startDate={exp.startDate}
            endDate={exp.endDate}
            area={exp.area}
            description={exp.description}
          />
        ))}
    </ul>
  );
};

export default ExperiencesList;
