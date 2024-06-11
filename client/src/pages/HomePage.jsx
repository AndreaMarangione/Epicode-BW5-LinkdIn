import React from "react";
import MainLayout from "../layout/mainlayout/MainLayout";
import ProfileSection from "../components/profilesection/ProfileSection";
import ExperiencesList from "../components/experienceslist/ExperiencesList";
import ModalComponent from "../components/modalcomponent/ModalComponent";
import AddnewExperience from "../components/addnewexperience/AddnewExperience";
import ProfileHeader from "../components/profileheader/ProfileHeader";
import EditProfile from "../components/editprofile/EditProfile";
import { expModalType } from "../redux/modalExpSlice";
import { useSelector } from "react-redux";

const HomePage = () => {
  const modalType = useSelector(expModalType);

  const modalTitle = modalType === 'experiences' ? 'Aggiungi esperienza:' : 'Modifica presentazione'

  return (
    <MainLayout>
      <ProfileHeader />
      <ProfileSection sectionTitle={"Esperienza"} levelTitle={"h5"} actions>
        <ExperiencesList userId={"6601c807d0b371001aa894a1"} />
        <ModalComponent title={modalTitle}>
          {modalType === "experiences" ? <AddnewExperience /> : <EditProfile />}
        </ModalComponent>
      </ProfileSection>
    </MainLayout>
  );
};

export default HomePage;
