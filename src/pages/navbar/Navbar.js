import React from "react";
import "./Navbar.css";
import "./NMediaQueries.css";
import logo from "../../images/logo-white.png";
import { useLocation, Link } from "react-router-dom";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { FaUsers, FaGraduationCap, FaHome } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { BsFillInfoCircleFill } from "react-icons/bs";

const Navbar = () => {
  const location = useLocation();
  const { pathname } = location;
  const exactLocation = pathname.split("/");

  // Logic for side navbar
  // Open the sidenav
  function openNav() {
    document.getElementById("mySidenav").style.width = "75%";
  }

  // Close/hide the sidenav
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg d-none d-lg-block">
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
                <FaGraduationCap className="nav-icon" /> Programs
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
                Hire Us
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="mobile-nav d-block d-lg-none">
        <div id="mySidenav" className="sidenav">
          <Link to="#" class="closebtn" onClick={closeNav}>
            &times;
          </Link>
          <div className="sidenav-links">
            <Link to="/" onClick={closeNav}>
              <FaHome className="nav-icon" /> Home
            </Link>
            <Link to="/why-choose-us" onClick={closeNav}>
              <BsFillInfoCircleFill className="nav-icon" /> About
            </Link>
            <Link to="/programmes" onClick={closeNav}>
              <FaGraduationCap className="nav-icon" /> Programs
            </Link>
            <Link to="/contact" onClick={closeNav}>
              <FiMapPin className="nav-icon" /> Contact
            </Link>
            <Link to="/contact" onClick={closeNav}>
              <FiMapPin className="nav-icon" /> Hire Us
            </Link>
          </div>
        </div>

        {/* <!-- Use any element to open the sidenav --> */}
        <div className="container">
          <div className="navbar-details">
            <div className="navbar-brand-links pt-4">
              <span
                onClick={openNav}
                id="mobile-nav-btn"
                className="hamburger-icon me-5"
              >
                <HiOutlineMenuAlt2 />
              </span>
              <img src={logo} alt="logo" className="logo-mobile" width="40%" />
            </div>
          </div>
        </div>
        <div id="overlay"></div>
      </nav>
    </>
  );
};

export default Navbar;
