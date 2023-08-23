import React, { useEffect } from "react";
import Typewriter from "typewriter-effect/dist/core";
import "../header/Header.css";
import "../header/HMediaQueries.css";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Banner from "../banner/Banner";
import { TbChevronsRight } from "react-icons/tb";

const Header = () => {
  // Scroll To top
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    const app = document.getElementById("home-header");
    const typewriter = new Typewriter(app, {
      loop: true,
      delay: 150,
      deleteSpeed: 70,
    });
    typewriter
      .pauseFor(1000)
      .typeString("JavaScript.")
      .pauseFor(700)
      .deleteChars(11)
      .typeString("Python.")
      .pauseFor(700)
      .deleteChars(7)
      .typeString("Django.")
      .pauseFor(700)
      .deleteChars(7)
      .typeString("React Native.")
      .pauseFor(700)
      .deleteChars(8)
      .typeString("JS.")
      .pauseFor(700)
      .deleteChars(8)
      .typeString("NodeJS.")
      .pauseFor(700)
      .deleteChars(7)
      .typeString("ExpressJS.")
      .pauseFor(700)
      .deleteChars(10)
      .typeString("Figma.")
      .pauseFor(700)
      .deleteChars(6)
      .typeString("Design.")
      .pauseFor(700)
      .deleteChars(6)
      .typeString("ata Science.")
      .pauseFor(900)
      .deleteChars(8)
      .typeString("Analysis.")
      .pauseFor(900)
      .deleteChars(14)
      .typeString("Power BI.")
      .pauseFor(700)
      .deleteChars(9)
      .typeString("Animation.")
      .pauseFor(700)
      .deleteChars(10)
      .start();
  }, []);

  return (
    <>
      <Banner />
      <header>
        <Navbar />

        {/* Mobile */}
        <div className="head">
          <div className="head-content text-white container">
            <div className="mobile-header mb-4">
              <h1 className="display-4 inner-text fw-bold">
                Anyone can write code. Not everyone can speak it as{" "}
                <span className="mobile-span">fluently</span> as we do
                <span className="mobile-span">.</span>
              </h1>
            </div>

            {/* Desktop */}
            <div className="typewriter-effect  desktop-header">
              <h1 className="display-1 typewriter-fixed">Learn</h1>
              <span
                className="display-1 typewriter-text"
                id="home-header"
              ></span>
            </div>

            <Link
              to="/programmes"
              className="desktop-subtitle-btn animated-border "
            >
              <span>
                Let's Get You Started{" "}
                <span className="iconforsub">
                  <TbChevronsRight />
                </span>
              </span>
            </Link>

            <h6 className="mb-3 mobile-subtitle">
              Acquire, develop and sharpen your tech skills with custom-made
              schedule and curriculum tailored just for you to set you apart
              from the competition.
            </h6>

            <Link to="/programmes" className="mobile-subtitle ">
              <button className="btn btn-lg btn-getstarted">
                <span>Get started</span>
              </button>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
