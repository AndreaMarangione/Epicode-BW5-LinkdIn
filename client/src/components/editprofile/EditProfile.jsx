import React, { useState } from "react";
import {
  useGetMyProfileQuery,
  useEdiProfileMutation,
} from "../../api/profileApi";

const EditProfile = () => {
  const { data } = useGetMyProfileQuery();
  const [editProfile, { isLoading, isSuccess, isError }] =
    useEdiProfileMutation();
  const [mod, setMod] = useState(data);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setMod({
      ...mod,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await editProfile({ mod });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="bg-white " onSubmit={onSubmit}>
      <input
        onChange={handleChange}
        className="form-control mb-3"
        type="text"
        name="name"
        placeholder="Name.."
        value={mod.name}
      />
      <input
        onChange={handleChange}
        className="form-control mb-3"
        type="text"
        name="surname"
        placeholder="Surname.."
        value={mod.surname}
      />
      <input
        onChange={handleChange}
        className="form-control mb-3"
        type="text"
        name="username"
        placeholder="Username.."
        value={mod.username}
      />
      <input
        onChange={handleChange}
        className="form-control mb-3"
        type="text"
        name="title"
        placeholder="Title.."
        value={mod.title}
      />
      <input
        onChange={handleChange}
        className="form-control mb-3"
        type="text"
        name="area"
        placeholder="Area.."
        value={mod.area}
      />
      <input
        onChange={handleChange}
        className="form-control mb-3"
        type="email"
        name="email"
        placeholder="E-mail.."
        value={mod.email}
      />
      <textarea
        onChange={handleChange}
        className="form-control mb-3"
        name="bio"
        placeholder="Bio.."
        value={mod.bio}
      ></textarea>
      <div className="border-top w-100 text-end pt-2">
        <div className="text-start">
          {isLoading && <span>Invio...</span>}
          {isSuccess && (
            <span className="text-success">Presentazione aggiornata</span>
          )}
          {isError && (
            <span className="text-danger">Ops..qualcosa è andato storto!</span>
          )}
        </div>
        <button
          type="submit"
          className=" py-1 px-3 rounded-pill fw-semibold mt-2 icon-link save-button"
        >
          Salva
        </button>
      </div>
    </form>
  );
};

export default EditProfile;
