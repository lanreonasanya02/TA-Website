import React from "react";
import logo from "../../images/logo-white.png";
import "./Footer.css";
import "./FMediaQueries.css";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-navbar ">
          <div className="navbar-brand footer-logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="navbar-links">
            <Link to="/" className="link link1">
              Home
            </Link>
            <Link to="/why-choose-us" className="link link1">
              Why Choose Us?
            </Link>
            <Link to="/programmes" className="link link1">
              Programs
            </Link>
            <Link to="/contact" className="link">
              Contact
            </Link>
          </div>
        </div>

        <div className="line"></div>

        <div className="footer-body">
          <p className="text-muted">
            We change lives, businesses, and nations through digital upskilling,
            developing the edge you need to conquer what’s next. atque facere
            sed delectus dignissimos porro accusamus culpa harum impedit nam
            nesciunt quas voluptate deserunt illum aut numquam quibusdam
            praesentium reprehenderit? Tenetur itaque labore quibusdam!
          </p>
        </div>

        <div className="line"></div>
        <div className="footer-end text-muted">
          <p>Copyright 2023. All Rights Reserved.</p>
          <div className="socials">
            <a
              href="mailto:info@techaccentng.com"
              className="icon icon1"
              target="_blank"
              rel="noreferrer"
            >
              <HiOutlineMail />
            </a>
            <a
              href="https://www.instagram.com/tech__accent"
              className="icon icon1"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/tech-accent-creatives"
              target="_blank"
              rel="noreferrer"
              className="icon icon1"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://twitter.com/tech__accent"
              className="icon"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        <div className="attribution text-muted">
          <p>
            Created with ❤️ by{" "}
            <a
              href="https://my-portfolio-khaki-psi.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              Lanre Adeolu
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
