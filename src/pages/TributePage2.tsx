import React from "react";
import "../css/tribute.css";

const TributePage = () => {
  return (
    <div id="main">
      <h1 id="title">Dr. Norman Borlaug</h1>
      <span>The man who saved a billion lives</span>
      <div id="image-div">
        <img
          id="img"
          src="https://c2.staticflickr.com/4/3689/10613180113_fdf7bcd316_b.jpg"
          alt="Dr. Norman Borlaug image"
        />
        <div id="img-caption">
          Dr. Norman Borlaug, third from the left, trains biologists in Mexico
          on how to increase wheat yields - part of his life-long war on hunger.
        </div>
      </div>
      <div id="tribute-info">
        <h3>Here's a time line of Dr. Borlaug's life:</h3>
        <section id="details">
          <ul id="list-tribute-2">
            <li>
              <strong>1914</strong> - Born in Cresco, Iowa
            </li>
            <li>
              <strong>1914</strong> - Finishes university and takes a job in the
              US Forestry Service
            </li>
          </ul>
          <br />
          <i>
            {" "}
            "Borlaug's life and achievement are testimony to the far-reaching
            contribution that one man's towering intellect, persistence and
            scientific vision can make to human peace and progress."{" "}
          </i>
          <br />
          <br />
          <i>-- Indian Prime Minister Manmohan Singh</i>
        </section>
        <section>
          <h3>
            If you have time, you should read more about this incredible human
            being on his{" "}
          </h3>
        </section>
      </div>
    </div>
  );
};

export default TributePage;
