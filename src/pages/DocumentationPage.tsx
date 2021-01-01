import React from "react";

import Section from "../components/Section";

import "../css/documentation.css";

const DocumentationPage = () => {
  return (
    <div id="main-doc">
      <nav id="navbar">
        <header className="nav-link header">JS Documentation</header>
        <a href="#Introduction" className="nav-link">
          Introduction
        </a>
        <a href="#What_you_should_already_know" className="nav-link">
          What you should already know
        </a>
        <a href="#" className="nav-link">
          JS Documentation
        </a>
        <a href="#" className="nav-link">
          JS Documentation
        </a>
        <a href="#" className="nav-link">
          JS Documentation
        </a>
      </nav>
      <div className="content">
        <Section headerTitle="Introduction" id="Introduction">
          <p className="doc">
            JavaScript is a cross-platform, object-oriented scripting language.
            It is a small and lightweight language. Inside a host environment
            (for example, a web browser), JavaScript can be connected to the
            objects of its environment to provide programmatic control over
            them.
          </p>
          <p className="doc">
            JavaScript contains a standard library of objects, such as Array,
            Date, and Math, and a core set of language elements such as
            operators, control structures, and statements. Core JavaScript can
            be extended for a variety of purposes by supplementing it with
            additional objects; for example:
          </p>
          <ul>
            <li className="doc">
              Client-side JavaScript extends the core language by supplying
              objects to control a browser and its Document Object Model (DOM).
              For example, client-side extensions allow an application to place
              elements on an HTML form and respond to user events such as mouse
              clicks, form input, and page navigation.
            </li>
            <li className="doc">
              Server-side JavaScript extends the core language by supplying
              objects relevant to running JavaScript on a server. For example,
              server-side extensions allow an application to communicate with a
              database, provide continuity of information from one invocation to
              another of the application, or perform file manipulations on a
              server.
            </li>
          </ul>
        </Section>

        <Section
          headerTitle={"What you should already know"}
          id="What_you_should_already_know"
        >
          <p className="doc">
            This guide assumes you have the following basic background:
          </p>
          <ul>
            <li className="doc">
              A general understanding of the Internet and the World Wide Web
              (WWW).
            </li>
            <li className="doc">
              Good working knowledge of HyperText Markup Language (HTML).
            </li>
            <li className="doc">
              Some programming experience. If you are new to programming, try
              one of the tutorials linked on the main page about JavaScript.
            </li>
          </ul>
        </Section>
      </div>
    </div>
  );
};

export default DocumentationPage;
