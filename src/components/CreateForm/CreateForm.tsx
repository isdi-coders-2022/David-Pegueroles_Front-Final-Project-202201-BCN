import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CreateAppointmentThunk } from "../../redux/thunks/appointmentsThunks";
import { Form, Heading } from "./CreateForm.style";

const CreateForm = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const blankForm = {
    name: "",
    date: "",
    hour: "",
    description: "",
    location: "",
    category: "",
  };

  const [formData, setFormData] = useState(blankForm);

  const isFormInvalid =
    formData.name === "" ||
    formData.date === "" ||
    formData.hour === "" ||
    formData.description === "" ||
    formData.location === "" ||
    formData.category === "";

  const resetForm = () => {
    setFormData(blankForm);
  };

  const changeData = (
    event:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const submitForm = async (event: React.FormEvent) => {
    event.preventDefault();

    await dispatch(CreateAppointmentThunk(formData));

    resetForm();
    navigate("/calendar");
  };

  return (
    <>
      <Heading>Add an appointment</Heading>

      <Form
        className="form"
        noValidate
        autoComplete="off"
        onSubmit={submitForm}
      >
        <label className="form__label" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="form__input"
          value={formData.name}
          onChange={changeData}
          placeholder="Name"
        />

        <label className="form__label" htmlFor="date">
          Date
        </label>
        <input
          type="date"
          id="date"
          className="form__input"
          value={formData.date}
          onChange={changeData}
        />

        <label className="form__label" htmlFor="hour">
          Hour
        </label>
        <input
          type="time"
          id="hour"
          className="form__input"
          value={formData.hour}
          onChange={changeData}
        />

        <label className="form__label" htmlFor="description">
          Description
        </label>
        <textarea
          id="description"
          className="form__input form__description"
          cols={30}
          rows={10}
          value={formData.description}
          onChange={changeData}
          placeholder="Add a description"
        ></textarea>

        <label className="form__label" htmlFor="location">
          Ubication
        </label>
        <input
          type="text"
          id="location"
          className="form__input"
          value={formData.location}
          onChange={changeData}
          placeholder="C/ Diputació 37, 7B, Barcelona"
        />

        <label className="form__label" htmlFor="category">
          Category
        </label>
        <input
          type="text"
          id="category"
          className="form__input"
          value={formData.category}
          onChange={changeData}
          placeholder="Category"
        />

        <button type="submit" className="form__submit" disabled={isFormInvalid}>
          CREATE
        </button>
      </Form>
    </>
  );
};

export default CreateForm;
