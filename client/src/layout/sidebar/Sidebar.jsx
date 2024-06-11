import React from "react";
import SidebarElement from "../../components/sidebarelement/SidebarElement";
import UsersList from "../../components/userslist/UsersList";
import { useGetProfilesQuery } from "../../api/profileApi";

const Sidebar = () => {
  const { isLoading, data, error } = useGetProfilesQuery();

  return (
    <aside className="col-md-4 col-lg-3">
      <SidebarElement sectionTitle={"Altri profili simili"} levelTitle={"h6"}>
        {isLoading && <span>Caricamento...</span>}
        {error && <span>Ops...Qualcosa è andato storto!</span>}
        {!isLoading && data && <UsersList data={data.slice(0, 5)} />}
      </SidebarElement>
      <SidebarElement sectionTitle={"Espandi la tua rete"} levelTitle={"h6"}>
        {isLoading && <span>Caricamento...</span>}
        {error && <span>Ops...Qualcosa è andato storto!</span>}
        {!isLoading && data && <UsersList data={data.slice(6, 11)} />}
      </SidebarElement>
      <SidebarElement sectionTitle={"Persone che potresti conoscere"} levelTitle={"h6"}>
        {isLoading && <span>Caricamento...</span>}
        {error && <span>Ops...Qualcosa è andato storto!</span>}
        {!isLoading && data && <UsersList data={data.slice(12, 17)} />}
      </SidebarElement>
    </aside>
  );
};

export default Sidebar;
