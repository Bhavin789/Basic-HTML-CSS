import React from "react";

import Section from "../components/Section";

import "../css/documentation.css";

const ShoppingPage = () => {
  return (
    <div id="main-doc">
      <header id="header">
        <img id="header-logo"></img>
        <nav id="nav-bar">
          <ul>
            <li className="nav-link">Features</li>
            <li className="nav-link">How it Works?</li>
            <li className="nav-link">Pricing</li>
          </ul>
        </nav>
      </header>
      <div>
        <section>
          <h3>Handcrafted, home-made masterpieces</h3>
          <form id="form">
            <input
              id="email"
              type="email"
              placeholder="Enter your email address"
            />
            <button type="submit"> Get Started</button>
          </form>
        </section>
        <section></section>
      </div>
      <footer> Footer</footer>
    </div>
  );
};

export default ShoppingPage;
