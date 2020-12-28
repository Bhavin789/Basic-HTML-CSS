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
          <span>Name</span>
          <input placeholder="Enter your Name" required></input>

          <span>Email</span>
          <input placeholder="Enter your Email" required></input>

          <span>Age (optional)</span>
          <input placeholder="Enter your Age" required></input>

          <span>Which option best describes your current role?</span>
          <select>
            <option>Select your role</option>
            <option>Student</option>
            <option>Full time Job</option>
            <option>Full time learner</option>
            <option>Prefer not to say</option>
            <option>Other</option>
          </select>

          <span>Would you recommend freeCodeCamp to a friend?</span>
          {/* <input type="radio"></input> */}

          <label>
            <input type="radio" name="indoor-outdoor" />
            Definitely
          </label>

          <label>
            <input type="radio" name="indoor-outdoor" />
            Maybe
          </label>

          <label>
            <input type="radio" name="indoor-outdoor" />
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
          {/* <input type="radio"></input> */}

          <label htmlFor="front-end">
            <input id="front-end" type="checkbox" name="personality" />{" "}
            Front-end Projects
          </label>

          <label htmlFor="back-end">
            <input id="back-end" type="checkbox" name="personality" /> Back-end
            Projects
          </label>

          <label htmlFor="data-visualisation">
            <input id="data-visualisation" type="checkbox" name="personality" />
            Data Visualization
          </label>

          <label htmlFor="challenges">
            <input id="challenges" type="checkbox" name="personality" />{" "}
            Challenges
          </label>

          <label htmlFor="wiki">
            <input id="wiki" type="checkbox" name="personality" /> Wiki
          </label>
          <label htmlFor="forum">
            <input id="forum" type="checkbox" name="personality" /> Forum
          </label>

          <span>Any comments or suggestions?</span>
          <input type="textarea" required></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SurveyFormPage;
