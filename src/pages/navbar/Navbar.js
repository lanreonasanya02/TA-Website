import React from "react";
import { useState } from "react";
import "./Navbar.css";
import "./NMediaQueries.css";
import logo from "../../images/white logo.png";
import { useLocation, Link } from "react-router-dom";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { FaUsers, FaGraduationCap } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { FcBusinessman } from "react-icons/fc";
// import { BurgerSpin as Burger } from "react-burger-icons";

const Navbar = () => {
  const location = useLocation();
  const { pathname } = location;
  const exactLocation = pathname.split("/");

  // const [isClosed, setIsClosed] = useState(false);
  // const toggleClosed = () => setIsClosed(!isClosed);

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container py-2" id="navigation-bar">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            id="mobile-nav-btn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <HiOutlineMenuAlt2 />
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <Link
                className={
                  exactLocation[1] === "why-choose-us"
                    ? "current-active nav-link link"
                    : "nav-link link"
                }
                to="/why-choose-us"
              >
                <FaUsers className="nav-icon" /> Why Choose Us?
              </Link>
              <Link
                className={
                  exactLocation[1] === "programmes"
                    ? "current-active nav-link link"
                    : "nav-link link"
                }
                to="/programmes"
              >
                <FaGraduationCap className="nav-icon" /> Programmes
              </Link>
              <Link
                className={
                  exactLocation[1] === "contact"
                    ? "contact-active nav-link link"
                    : "nav-link link"
                }
                to="/contact"
              >
                <FiMapPin className="nav-icon" /> Contact
              </Link>
              <Link className="nav-link btn btn-lg btn-hire px-5" to="/hire-us">
                <FcBusinessman className="nav-icon" /> Hire Us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
