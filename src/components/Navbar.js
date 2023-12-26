import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom/cjs/react-router-dom";
import Logo from "./Logo";
import NavDropdown from "react-bootstrap/NavDropdown";

const Navbar = () => {
  const [isCollapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!isCollapsed);
  };

  return (
    <>
      <header className="navBar">
        <section>
          <Logo />
        </section>
        <div className="menu-toggle" onClick={toggleCollapse}>
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
          <li
            className="link"
            style={{
              color: "white",
              textDecoration: "none",
              width: "fit-content",
            }}
          >
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Dropdown"
              menuVariant="dark"
              className="dropDown"
            >
              <NavDropdown.Item className="dropdnOptions"  href="/">Tutorials</NavDropdown.Item>
              <NavDropdown.Item className="dropdnOptions" href="/">Feedback</NavDropdown.Item>
            </NavDropdown>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Navbar;
