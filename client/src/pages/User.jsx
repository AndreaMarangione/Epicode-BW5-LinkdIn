import React from "react";
import MainLayout from "../layout/mainlayout/MainLayout";
import ProfileSection from "../components/profilesection/ProfileSection";
import ExperiencesList from "../components/experienceslist/ExperiencesList";
import { useParams } from "react-router-dom";
import UserProfileHeader from "../components/userprofileheader/UserProfileHeader";


const User = () => {
  const {userId} = useParams()

  return (
    <MainLayout>
      <UserProfileHeader userId={userId}/>
      <ProfileSection sectionTitle={"Esperienza"} levelTitle={"h5"}>
        <ExperiencesList userId={userId} />
      </ProfileSection>
    </MainLayout>
  );
};

export default User;
