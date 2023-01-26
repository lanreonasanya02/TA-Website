import React, { useEffect } from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import "../contact/Contact.css";
import "../contact/CMediaQueries.css";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiMapPin } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";

const Contact = () => {
  // Scroll To top
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="contact">
      <Navbar />
      <div className="heading">
        <h1 className="">Contact Us</h1>
      </div>

      <div className="body">
        <div className="container body-head">
          <p className="lead contact-headings headings-1">
            Let's St<span>art A Conv</span>ersation
          </p>

          <p className="container mobile-top-paragraph lead">
            Want to learn more about our products and services? Below are how
            you could reach us.
          </p>

          <div className="mobile-hero-text container my-5 pt-3">
            {/* <p className="lead contact-headings headings-1">
              Our Co<span>ntact D</span>etails
            </p> */}
            <div className="mt-3 d-flex">
              <FiMapPin id="contact-icon" />
              <p className="ms-2">
                33a, Odozi Street, Opposite Dankaro Estate, Ojodu Berger, Lagos
                State, Nigeria
              </p>
            </div>
            <p className="">
              {" "}
              <BsTelephone id="contact-icon" /> +234-813-6128-748
            </p>

            <p className="">
              <HiOutlineMail id="contact-icon" />
              info@techaccentng.com
            </p>
          </div>

          {/* For Mobile */}
          <div className="hero-form contact mobile-hero-form">
            <h5 className="heading">REQUEST A CALL</h5>
            <p className="text-white">
              Send us a message. An agent would reach out to you shortly.
            </p>
            <form action="submit" method="POST">
              <input type="text" name="" id="" placeholder="Name*" required />

              <input
                type="tel"
                name=""
                id=""
                placeholder="Phone No*"
                required
              />

              <input type="email" name="" id="" placeholder="Email*" required />
              <textarea
                name=""
                id=""
                cols="40"
                rows="3"
                placeholder="Additional Message"
              ></textarea>

              <button type="submit" className="btn btn-lg btn-enroll px-5 mt-4">
                Send Message
              </button>
            </form>
          </div>

          {/* For Desktop */}
          <div className="hero contact-hero container">
            <div className="hero-text contact-hero-text">
              <p className="lead contact-headings">Our Contact Details</p>
              <div className="mt-3 d-flex">
                <FiMapPin id="contact-icon" />
                <p className="ms-2">
                  33a, Odozi Street, Opposite Dankaro Estate, Ojodu Berger,
                  Lagos State, Nigeria
                </p>
              </div>

              <p className="">
                {" "}
                <BsTelephone id="contact-icon" /> +234-813-6128-748
              </p>

              <p className="">
                <HiOutlineMail id="contact-icon" />
                info@techaccentng.com
              </p>

              <div className="socials">
                <a
                  href="https://www.instagram.com/tech__accent"
                  className="socials-icon socials-icon1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/company/tech-accent-creatives/"
                  target="_blank"
                  rel="noreferrer"
                  className="socials-icon socials-icon1"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://twitter.com/tech__accent"
                  className="socials-icon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>

            <div className="hero-form contact contact-hero-form">
              <h5 className="heading">REQUEST A CALL</h5>
              <p className="text-white">
                Send us a message. An agent would reach out to you shortly.
              </p>
              <form action="submit" method="POST">
                <input type="text" name="" id="" placeholder="Name*" required />

                <input
                  type="tel"
                  name=""
                  id=""
                  placeholder="Phone No*"
                  required
                />

                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Email*"
                  required
                />
                <textarea
                  name=""
                  id=""
                  cols="40"
                  rows="3"
                  placeholder="Message"
                ></textarea>

                <button
                  type="submit"
                  className="btn btn-lg btn-enroll px-5 mt-4"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Contact;
