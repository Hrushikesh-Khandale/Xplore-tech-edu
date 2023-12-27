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
          target="_blank" rel="noreferrer"
        >
          Learn More
        </a>
      </div>
    </>
  );
};

export default Homepage;
