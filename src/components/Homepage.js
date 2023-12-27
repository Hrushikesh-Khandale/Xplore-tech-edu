import React from "react";
import logo from "./logo.png";

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


        <div className="services">
            
        </div>
      </div>
    </>
  );
};

export default Homepage;
