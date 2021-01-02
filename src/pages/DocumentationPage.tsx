import React from "react";

import Section from "../components/Section";

import "../css/documentation.css";

const DocumentationPage = () => {
  return (
    <div id="main-doc">
      <nav id="navbar">
        <header className="nav-link header">JS Documentation</header>
        <ul>
          <li>
            <a href="#Introduction" className="nav-link">
              Introduction
            </a>
          </li>
          <li>
            <a href="#What_you_should_already_know" className="nav-link">
              What you should already know
            </a>
          </li>
          <li>
            <a href="#Hello_World" className="nav-link">
              Hello World
            </a>
          </li>
          <li>
            <a href="#Variables" className="nav-link">
              Variables
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              JS Documentation
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              JS Documentation
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              JS Documentation
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              JS Documentation
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              JS Documentation
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              JS Documentation
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              JS Documentation
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              JS Documentation
            </a>
          </li>
        </ul>
      </nav>
      <div className="content">
        <Section headerTitle="Introduction">
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

        <Section headerTitle={"What you should already know"}>
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

        <Section headerTitle={"Hello world"}>
          <p className="doc">
            To get started with writing JavaScript, open the Scratchpad and
            write your first "Hello world" JavaScript code:
          </p>

          <code>Hi</code>
          <p className="doc">
            Select the code in the pad and hit Ctrl+R to watch it unfold in your
            browser!
          </p>
        </Section>

        <Section headerTitle={"Variables"}>
          <p className="doc">
            You use variables as symbolic names for values in your application.
            The names of variables, called identifiers, conform to certain
            rules.
          </p>
          <p className="doc">
            A JavaScript identifier must start with a letter, underscore (_), or
            dollar sign ($); subsequent characters can also be digits (0-9).
            Because JavaScript is case sensitive, letters include the characters
            "A" through "Z" (uppercase) and the characters "a" through "z"
            (lowercase).
          </p>
          <p className="doc">
            You can use ISO 8859-1 or Unicode letters such as å and ü in
            identifiers. You can also use the Unicode escape sequences as
            characters in identifiers. Some examples of legal names are
            Number_hits, temp99, and _name.
          </p>
        </Section>
      </div>
    </div>
  );
};

export default DocumentationPage;
