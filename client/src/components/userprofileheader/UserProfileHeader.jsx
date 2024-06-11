import React from "react";
import { useGetAProfileQuery } from "../../api/profileApi";
import "./userprofileheader.css";

const UserProfileHeader = ({ userId }) => {
  const { isLoading, data, error } = useGetAProfileQuery(userId);

  return (
    <section className="main-header rounded-3 bg-white mb-2 border">
      <div className="main-header__header overflow-hidden ">
        <img
          src="https://picsum.photos/640/480"
          alt=""
          className="w-100 h-100 rounded-top-3 img-fluid "
        />
      </div>
      <div className="main-header__body position-relative p-4 ">
        {isLoading && <span>Caricamento...</span>}
        {!isLoading && data && (
          <>
            <div className="main-avatar">
              <img
                src={(data && data.image) || "https://placebeard.it/400"}
                alt="Profile header pic"
                className="w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="user-info mt-4">
              <h2 className="h4">
                {data.name} {data.surname}
              </h2>
              <span className="d-block">{data.title}</span>
              <span className="text-secondary">{data.area}</span>
              <p className="m-0">{data.bio}</p>
            </div>
          </>
        )}
        {error && <span>Ops...there was an error!</span>}
      </div>
    </section>
  );
};

export default UserProfileHeader;
