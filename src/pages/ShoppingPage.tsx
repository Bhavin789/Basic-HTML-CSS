import React from "react";

import "../css/shopping.css";

const ShoppingPage = () => {
  return (
    <div id="main-shop">
      <header id="header">
        <img
          src="https://s3.amazonaws.com/freecodecamp/original_trombones.png"
          alt="Company Logo"
          id="header-logo"
        ></img>
        <nav id="nav-bar">
          <ul>
            <li className="nav-link">
              <a href="#features-sec">Features</a>
            </li>
            <li className="nav-link">
              <a href="#features-sec">How it Works?</a>
            </li>
            <li className="nav-link">
              <a href="#pricing">Pricing</a>
            </li>
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
        <section id="features-sec">
          <div id="features">
            <div id="feature-info">
              <img></img>
              <div>
                <h3>Premium Materials</h3>
                <p>
                  Our trombones use the shiniest brass which is sourced locally.
                  This will increase the longevity of your purchase
                </p>
              </div>
            </div>
            <div id="feature-info">
              <img></img>
              <div>
                <h3>Premium Materials</h3>
                <p>
                  Our trombones use the shiniest brass which is sourced locally.
                  This will increase the longevity of your purchase
                </p>
              </div>
            </div>
            <div id="feature-info">
              <img></img>
              <div>
                <h3>Premium Materials</h3>
                <p>
                  Our trombones use the shiniest brass which is sourced locally.
                  This will increase the longevity of your purchase
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="pricing">
          <div id="products">
            <div id="product-card">
              <div id="product-header">TENOR TROMBONE</div>
              <span id="product-price"> $600</span>
              <p>Lorem ipsum</p>
              <button id="product-select"> Select</button>
            </div>
            <div id="product-card">
              <div id="product-header">BASS TROMBONE</div>
              <span id="product-price"> $600</span>
              <p>Lorem ipsum</p>
              <button id="product-select"> Select</button>
            </div>
            <div id="product-card">
              <div id="product-header">VALVE TROMBONE</div>
              <span id="product-price"> $600</span>
              <p>Lorem ipsum</p>
              <button id="product-select"> Select</button>
            </div>
          </div>
        </section>
      </div>
      <footer>
        <ul>
          <li>Privacy</li>
          <li>Terms</li>
          <li>Conduct</li>
        </ul>
        <span className="copyright">Copyright 2016, Original Trombones</span>
      </footer>
    </div>
  );
};

export default ShoppingPage;
