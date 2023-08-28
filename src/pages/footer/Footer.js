import React from "react";
import { Link } from "react-router-dom";
import "../footer/Footer.css";
import "../footer/FMediaQueries.css";
import logo from "../../images/logo-white.png";
import { FiInstagram, FiTwitter } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer className="d-none d-md-block">
        <div className="container-lg">
          <div className="footer-body">
            <div className="row align-items-center">
              <div className="col-md-4 section-one">
                <img
                  src={logo}
                  alt="logo"
                  className="logo-mobile"
                  width="45%"
                />
              </div>

              <div className="col-md-4 section-two">+234-813-6128-748</div>

              <div className="col-md-4 section-three">
                <a
                  href="mailto:info@techaccentng.com"
                  target="_blank"
                  rel="noreferrer"
                  className="socials"
                >
                  <span
                    className="tt"
                    data-bs-placement="top"
                    title="Send us a mail"
                  >
                    <AiOutlineMail />
                  </span>
                </a>
                <a
                  href="https://www.twitter.com/tech__accent"
                  target="_blank"
                  rel="noreferrer"
                  className="socials"
                >
                  <span
                    className="tt"
                    data-bs-placement="top"
                    title="Send Us A Tweet"
                  >
                    <FiTwitter />
                  </span>
                </a>
                <a
                  href="https://www.instagram.com/tech__accent/"
                  target="_blank"
                  rel="noreferrer"
                  className="socials"
                >
                  <span
                    className="tt"
                    data-bs-placement="top"
                    title="Visit Us On Instagram"
                  >
                    <FiInstagram />
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/company/tech-accent-creatives"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span
                    className="tt"
                    data-bs-placement="top"
                    title="Check Us Out On LinkedIn"
                  >
                    <FaLinkedinIn />
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom text-center attribution mt-5">
            <p>
              <p>Copyright 2023 - All Rights Reserved</p>
            </p>
            <p className="">Created With ❤️ by Lanre Adeolu</p>
          </div>
        </div>
      </footer>

      {/* Mobile view */}

      <footer className="d-block d-md-none">
        <div className="">
          <div className="navbar-brand">
            <img src={logo} alt="logo" />
          </div>

          <div className="all-links">
            <div class="navbar-nav">
              <h6>Website links</h6>
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/about">
                About
              </Link>
              <Link className="nav-link" to="/programs">
                Programs
              </Link>
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
              <Link className="nav-link" to="/hire-us">
                Hire Us
              </Link>
            </div>

            <div className="text-center">
              <h6>Contact details</h6>
              <p>+234-813-6128-748</p>

              <div className="links-column mt-5">
                <h6>Our Socials</h6>
                <a
                  href="mailto:info@techaccentng.com"
                  target="_blank"
                  rel="noreferrer"
                  className="socials"
                >
                  <span
                    className="tt"
                    data-bs-placement="top"
                    title="Send us a mail"
                  >
                    <AiOutlineMail />
                  </span>
                </a>
                <a
                  href="https://www.twitter.com/tech__accent"
                  target="_blank"
                  rel="noreferrer"
                  className="socials"
                >
                  <span
                    className="tt"
                    data-bs-placement="top"
                    title="Send Us A Tweet"
                  >
                    <FiTwitter />
                  </span>
                </a>
                <a
                  href="https://www.instagram.com/tech__accent/"
                  target="_blank"
                  rel="noreferrer"
                  className="socials"
                >
                  <span
                    className="tt"
                    data-bs-placement="top"
                    title="Visit Us On Instagram"
                  >
                    <FiInstagram />
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/company/tech-accent-creatives"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span
                    className="tt"
                    data-bs-placement="top"
                    title="Check Us Out On LinkedIn"
                  >
                    <FaLinkedinIn />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom text-center attribution mt-4">
            <p>
              <p>Copyright 2023 - All Rights Reserved</p>
            </p>
            <p className="">Created With ❤️ by Lanre Adeolu</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
