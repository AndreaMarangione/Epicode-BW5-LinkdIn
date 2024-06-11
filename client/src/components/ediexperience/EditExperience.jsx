import React, { useState } from "react";
import {
  useEditExperienceMutation,
  useGetExperienceQuery,
  useDeleteExperienceMutation,
} from "../../api/experienceApi";
import { experienceToEdit } from "../../redux/experienceSelectedSpice";
import { useSelector } from "react-redux";
import "./editexperience.css";

const EditExperience = () => {
  const idExp = useSelector(experienceToEdit);
  const {
    data,
    isLoading: loadingData,
    isError: errorData,
  } = useGetExperienceQuery({
    userId: "6601c807d0b371001aa894a1",
    expId: idExp,
  });
  const [mod, setMod] = useState(data);

  const [editExperience, { isLoading, isSuccess, isError }] =
    useEditExperienceMutation();
  const [
    deleteExperience,
    {
      isLoading: deleteLoading,
      isError: deleteError,
      isSuccess: deleteSuccess,
    },
  ] = useDeleteExperienceMutation();

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
      await editExperience({
        userId: "6601c807d0b371001aa894a1",
        expId: idExp,
        expModified: mod,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {loadingData && <span>Caricamento...</span>}
      {errorData && <span>Ops...c'è stato un errore!</span>}
      {!loadingData && mod && (
        <>
          <form className="bg-white " onSubmit={onSubmit}>
            <input
              onChange={handleChange}
              className="form-control mb-3"
              type="text"
              name="role"
              placeholder="Role.."
              value={mod.role}
            />
            <input
              onChange={handleChange}
              className="form-control mb-3"
              type="text"
              name="company"
              placeholder="Company.."
              value={mod.company}
            />
            <input
              onChange={handleChange}
              className="form-control mb-3"
              type="text"
              name="startDate"
              placeholder="Start date.."
              value={mod.startDate}
            />
            <input
              onChange={handleChange}
              className="form-control mb-3"
              type="text"
              name="endDate"
              placeholder="End date.."
              value={mod.endDate}
            />
            <input
              onChange={handleChange}
              className="form-control mb-3"
              type="area"
              name="area"
              placeholder="Area.."
              value={mod.area}
            />
            <textarea
              onChange={handleChange}
              className="form-control mb-3"
              name="description"
              placeholder="Description.."
              value={mod.description}
            ></textarea>
            <div className="border-top w-100 text-end pt-2">
              <div className=" float-start ">
                {deleteLoading && <span>Elimino...</span>}
                {isLoading && <span>Invio...</span>}
                {isSuccess && (
                  <span className="text-success">Esperienza modificata</span>
                )}
                {deleteError && (
                  <span className="text-success">
                    Esperienza eliminata
                  </span>
                )}
                {isError && (
                    <span className="text-danger">
                    Ops..qualcosa è andato storto!
                  </span>
                )}
                {deleteSuccess && (
                  <span className="text-success">Esperienza eliminata</span>
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
          <div className="text-end">
          <button
            className="btn btn-sm  text-danger text-decoration-underline small"
            onClick={() => {
              deleteExperience({
                userId: "6601c807d0b371001aa894a1",
                expId: idExp,
              });
            }}
          >
            {" "}
            Elimina esperienza{" "}
          </button>
          </div>
        </>
      )}
    </>
  );
};

export default EditExperience;
