import React from "react";
import MainLayout from "../layout/mainlayout/MainLayout";
import ProfileSection from "../components/profilesection/ProfileSection";
import ExperiencesList from "../components/experienceslist/ExperiencesList";
import ModalComponent from "../components/modalcomponent/ModalComponent";
import EditExperience from "../components/ediexperience/EditExperience";
import AddnewExperience from "../components/addnewexperience/AddnewExperience";
import { expModalType } from "../redux/modalExpSlice";
import { useSelector } from "react-redux";

const Edit = () => {
  const modalType = useSelector(expModalType);

  const modalTitle =
    modalType === "experiences" ? "Aggiungi esperienza" : "Modifica esperienza";

  return (
    <MainLayout>
      <ProfileSection sectionTitle={"Esperienza"} levelTitle={"h5"} addButton>
        <ExperiencesList userId={"6601c807d0b371001aa894a1"} />
        <ModalComponent title={modalTitle}>
          {modalType === "experiences" ? (
            <AddnewExperience />
          ) : (
            <EditExperience />
          )}
        </ModalComponent>
      </ProfileSection>
    </MainLayout>
  );
};

export default Edit;
