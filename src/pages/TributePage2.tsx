import React from "react";
import "../css/tribute.css";

const TributePage = () => {
  return (
    <div id="main">
      <h1 id="title">Dr. Norman Borlaug</h1>
      <span>The man who saved a billion lives</span>
      <div id="image-div">
        <image id="img"></image>
        <span id="img-caption">
          Dr. Norman Borlaug, third from the left, trains biologists in Mexico
          on how to increase wheat yields - part of his life-long war on hunger.
        </span>
      </div>
      <div className="tribute-info">
        <h3>Here's a time line of Dr. Borlaug's life:</h3>
        <section>
          <ul>
            <li>1914 - Born in Cresco, Iowa</li>
            <li>
              1914 - Finishes university and takes a job in the US Forestry
              Service
            </li>
          </ul>
          "Borlaug's life and achievement are testimony to the far-reaching
          contribution that one man's towering intellect, persistence and
          scientific vision can make to human peace and progress."
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
