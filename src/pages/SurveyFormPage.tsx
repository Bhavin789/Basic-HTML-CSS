import React from "react";
import "../css/survey.css";

const SurveyFormPage = () => {
  return (
    <div id="main">
      <div className="App-header">
        <h1 id="title">freeCodeCamp Survey Form</h1>
        <p id="description">
          Thank you for taking the time to help us improve the platform
        </p>

        <form id="survey-form">
          <span id="name-label">Name</span>
          <input placeholder="Enter your Name" required id="name" />

          <span id="email-label">Email</span>
          <input placeholder="Enter your Email" required id="email" />

          <span id="number-label">Age (optional)</span>
          <input
            placeholder="Enter your Age"
            required
            id="number"
            type="number"
            min={0}
            max={100}
          />

          <span>Which option best describes your current role?</span>
          <select id="dropdown">
            <option>Select your role</option>
            <option>Student</option>
            <option>Full time Job</option>
            <option>Full time learner</option>
            <option>Prefer not to say</option>
            <option>Other</option>
          </select>

          <span>Would you recommend freeCodeCamp to a friend?</span>

          <label htmlFor="definitely">
            <input type="radio" name="recommend" checked />
            Definitely
          </label>

          <label htmlFor="definitely">
            <input type="radio" name="recommend" />
            Maybe
          </label>

          <label htmlFor="definitely">
            <input type="radio" name="recommend" />
            Not Sure
          </label>

          <span>What is your favorite feature of freeCodeCamp?</span>
          <select>
            <option>Select an option</option>
            <option>Challenges</option>
            <option>Projects</option>
            <option>Community</option>
            <option>Open Source</option>
            <option>Other</option>
          </select>

          <span>
            What would you like to see improved? (Check all that apply)
          </span>

          <label htmlFor="front-end">
            <input
              id="front-end"
              value="front-end"
              type="checkbox"
              name="improvements"
            />{" "}
            Front-end Projects
          </label>

          <label htmlFor="back-end">
            <input
              id="back-end"
              value="back-end"
              type="checkbox"
              name="improvements"
            />{" "}
            Back-end Projects
          </label>

          <label htmlFor="data-visualisation">
            <input
              id="data-visualisation"
              value="back-end"
              type="checkbox"
              name="improvements"
            />
            Data Visualization
          </label>

          <label htmlFor="challenges">
            <input
              id="challenges"
              value="challenges"
              type="checkbox"
              name="improvements"
            />{" "}
            Challenges
          </label>

          <label htmlFor="wiki">
            <input id="wiki" value="wiki" type="checkbox" name="improvements" />{" "}
            Wiki
          </label>
          <label htmlFor="forum">
            <input
              id="forum"
              value="forum"
              type="checkbox"
              name="improvements"
            />{" "}
            Forum
          </label>

          <span>Any comments or suggestions?</span>
          <textarea
            id="comments"
            name="comments"
            placeholder="Enter your comments here..."
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SurveyFormPage;
