import React from "react";
import "../css/survey.css";

const SurveyFormPage = () => {
  return (
    <div id="main" className="survey">
      <div className="App-header">
        <div>
          <h1 id="title">freeCodeCamp Survey Form</h1>
          <p id="description">
            Thank you for taking the time to help us improve the platform
          </p>
        </div>

        <form id="survey-form">
          <label id="name-label">Name</label>
          <input placeholder="Enter your Name" required id="name" />

          <label id="email-label">Email</label>
          <input
            placeholder="Enter your Email"
            required
            id="email"
            type="email"
          />

          <label id="number-label">Age (optional)</label>
          <input
            placeholder="Enter your Age"
            required
            id="number"
            type="number"
            min={10}
            max={99}
          />

          <label>Which option best describes your current role?</label>
          <select id="dropdown">
            <option>Select your role</option>
            <option>Student</option>
            <option>Full time Job</option>
            <option>Full time learner</option>
            <option>Prefer not to say</option>
            <option>Other</option>
          </select>

          <label>Would you recommend freeCodeCamp to a friend?</label>

          <label htmlFor="definitely">
            <input
              type="radio"
              id="definitely"
              name="recommend"
              value="definitely"
              checked
            />
            Definitely
          </label>

          <label htmlFor="maybe">
            <input type="radio" id="maybe" name="recommend" value="maybe" />
            Maybe
          </label>

          <label htmlFor="not-sure">
            <input
              type="radio"
              id="not-sure"
              name="recommend"
              value="not-sure"
            />
            Not Sure
          </label>

          <label>What is your favorite feature of freeCodeCamp?</label>
          <select>
            <option>Select an option</option>
            <option>Challenges</option>
            <option>Projects</option>
            <option>Community</option>
            <option>Open Source</option>
            <option>Other</option>
          </select>

          <label>
            What would you like to see improved? (Check all that apply)
          </label>

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

          <label>Any comments or suggestions?</label>
          <textarea
            id="comments"
            name="comments"
            placeholder="Enter your comments here..."
            required
          ></textarea>
          <button type="submit" id="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SurveyFormPage;
