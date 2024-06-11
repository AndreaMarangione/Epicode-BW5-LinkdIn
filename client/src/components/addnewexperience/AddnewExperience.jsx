import React, { useState } from "react";
import { useCreateExperienceMutation } from "../../api/experienceApi";
import './addnewexperience.css'

const AddnewExperience = () => {
  const [createExperience, {isLoading, isSuccess, isError}] = useCreateExperienceMutation();

  const [newExperience, setExperience] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setExperience({
      ...newExperience,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await createExperience({userId: "6601c807d0b371001aa894a1", newExperience})
        
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
        name="role"
        placeholder="Role.."
      />
      <input
        onChange={handleChange}
        className="form-control mb-3"
        type="text"
        name="company"
        placeholder="Company.."
      />
      <input
        onChange={handleChange}
        className="form-control mb-3"
        type="date"
        name="startDate"
        placeholder="Start date.."
      />
      <input
        onChange={handleChange}
        className="form-control mb-3"
        type="date"
        name="endDate"
        placeholder="End date.."
      />
      <input
        onChange={handleChange}
        className="form-control mb-3"
        type="area"
        name="area"
        placeholder="Area.."
      />
      <textarea
        onChange={handleChange}
        className="form-control mb-3"
        name="description"
        placeholder="Description.."
      ></textarea>
      <div className="border-top w-100 text-end pt-2">
      <div className="text-start">
      {isLoading && <span>Invio...</span>}
      {isSuccess && <span className="text-success">Esperienza aggiunta</span>}
      {isError && <span className="text-danger">Ops..qualcosa è andato storto!</span>}
      </div>
      <button type="submit" className=" py-1 px-3 rounded-pill fw-semibold mt-2 icon-link save-button">
        Salva
      </button>
      </div>
    </form>
  );
};

export default AddnewExperience;
