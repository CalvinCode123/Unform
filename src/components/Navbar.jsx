import { React, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import GlitchText from "./GlitchText";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Navbar() {
  const location = useLocation();
  const pageTitle = useMemo(() => {
    switch (location.pathname) {
      case "/Home":
        return null;
      case "/":
        return null;
      case "/Opencall":
        return "Open Call";
      case "/About":
        return "About Us";
      case "/Events":
        return "Events";
      case "/contact":
        return "Contact Us";
      default:
        return "Welcome";
    }
  }, [location.pathname]);

  return (
    <header>
      <nav
        expand="false"
        id="navbar"
        className="black navbar navbar-expand-lg fixed-top"
      >
        <Link id="nav-logo" className="navbar-brand" to="/Home">
          {" "}
          <GlitchText
            speed={1}
            enableShadows={true}
            enableOnHover={true}
            className="custom-class"
          >
            Unform
          </GlitchText>
        </Link>

        <button
          className="navbar-toggler"
          id="nav-btn"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span className="navbar-btn">
            <i className="fa fa-bars" aria-hidden="true"></i>
          </span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="collapsibleNavbar"
        >
          <ul id="nav-ul" className="navbar-nav">
            <li className="nav-item navigation-list">
              <Link className="nav-link nav-custom-link" to="/Opencall">
                Open Call
              </Link>
            </li>
            <li className="nav-item navigation-list">
              <Link className="nav-link nav-custom-link" to="/About">
                About
              </Link>
            </li>
            <li className="nav-item navigation-list">
              <Link className="nav-link nav-custom-link" to="/Events">
                Events
              </Link>
            </li>
            <li className="nav-item navigation-list">
              <Link className="nav-link nav-custom-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {pageTitle && <h2 style={{ padding: "50px 0" }}>{pageTitle}</h2>}
    </header>
  );
}

export default Navbar;
