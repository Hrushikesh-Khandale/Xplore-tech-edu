import React from "react";
import HTML from "./LOGOS/html.png";
import CSS from "./LOGOS/css.png";
import JS from "./LOGOS/js.png";
import NODEJS from "./LOGOS/nodejs.png";
import REACTJS from "./LOGOS/reactjs.png";

const Homepage = () => {
  return (
    <>
      <div className="homepage">
        {/* Logo and button/link */}
        <p className="p1">X</p>
        <p className="p2">Xplore</p>
        <p className="p3">Learn from Anywhere</p>

        <a
          className="learnMore"
          href="https://www.coders.dev/blog/emerging-technologies-and-trends-to-watch.html"
          target="_blank"
          rel="noreferrer"
        >
          Learn More
        </a>

        {/* arrow svg */}
        <div className="downArrow">
          <svg
            data-slot="icon"
            fill="none"
            stroke-width="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            ></path>
          </svg>
        </div>
      </div>
      <br />
      {/* Proframming languages */}
      <div className="languageLinks">
        <h1 className="languageHeader">Programming Languages</h1>
        <div className="container">
          {/* html */}
          <button className="html">
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/HTML"
              target="_blank"
              rel="noreferrer"
            >
              <img src={HTML} alt="HTML" />
            </a>
            <b><p>HTML</p></b>
          </button>
          {/* css */}
          <button className="css">
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS"
              target="_blank"
              rel="noreferrer"
            >
              <img src={CSS} alt="CSS" />
            </a>
            <b><p>Javascript</p></b>
          </button>
          {/* JS */}
          <button className="javascript">
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              rel="noreferrer"
            >
              <img src={JS} alt="Javascript" />
            </a>
            <b><p>CSS</p></b>
          </button>
          {/* Nodejs */}

          <button className="nodejs">
            <a
              href="https://nodejs.org/en/learn/getting-started/introduction-to-nodejs"
              target="_blank"
              rel="noreferrer"
            >
              <img src={NODEJS} alt="NodeJS" />
            </a>
            <b><p>NodeJS</p></b>
          </button>
          {/* Reactjs */}
          <button className="reactjs">
            <a
              href="https://react.dev/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={REACTJS} alt="ReactJS" />
            </a>
            <b><p>ReactJS</p></b>
          </button>
        </div>
      </div>
    </>
  );
};

export default Homepage;
