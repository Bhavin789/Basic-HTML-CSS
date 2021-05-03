import React from "react";
import "../css/survey2.css";

const SurveyFormPage2 = () => {
  return (
    <>
      <h1 id="title">freeCodeCamp Survey Form</h1>
      <p id="description">
        Thank you for taking the time to help us improve the platform
      </p>

      <form action="" id="survey-form">
        <label htmlFor="name" id="name-label">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter name"
          required
        />

        <label htmlFor="email" id="email-label">
          Email
        </label>
        <input
          type="email"
          name="name"
          id="email"
          placeholder="Enter email"
          required
        />
        <label htmlFor="number" id="number-label">
          Number
        </label>

        <input
          type="number"
          name="name"
          id="number"
          min={0}
          max={200}
          placeholder="Enter number"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default SurveyFormPage2;
