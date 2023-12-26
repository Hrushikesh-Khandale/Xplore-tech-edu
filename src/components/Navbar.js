import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom/cjs/react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  // State to manage the collapse/expand of the menu
  const [isCollapsed, setCollapsed] = useState(false);

  // Function to toggle the collapse state
  const toggleCollapse = () => {
    setCollapsed(!isCollapsed);
  };

  return (
    <>
      {/* Navbar Header */}
      <header className="navBar">
        {/* Logo */}
        <Logo />

        {/* Menu Toggle Button */}
        <div className="menu-toggle" onClick={toggleCollapse}>
          {/* Hamburger Menu Bars */}
          <div className={`bar ${isCollapsed ? "collapsed" : ""}`}></div>
          <div className={`bar ${isCollapsed ? "collapsed" : ""}`}></div>
          <div className={`bar ${isCollapsed ? "collapsed" : ""}`}></div>
        </div>

        <ul className={`navLists ${isCollapsed ? "collapsed" : ""}`}>
          <Link className="link" to="/homepage">
            Home
          </Link>
          <Link className="link" to="/about">
            About Us
          </Link>
        </ul>
      </header>
    </>
  );
};

export default Navbar;
