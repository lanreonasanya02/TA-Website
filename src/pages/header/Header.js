import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";
import "../header/Header.css";
import "../header/HMediaQueries.css";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Banner from "../banner/Banner";

const Header = () => {
  // Scroll To top
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Banner />
      <header>
        <Navbar />

        <div className="head pt-5">
          <div className="head-content text-white container">
            <div className="typewriter-effect display-1 mb-4">
              <h1 className="typewritter-fixed">Want to acquire skills in</h1>
              <Typewriter
                options={{
                  strings: [
                    "Web Development?",
                    "Web Design?",
                    "Product Design?",
                    "Data Science?",
                    "Data Analysis?",
                    // "Switching Careers?",
                    // "Looking to hire?",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <h1 className="h1-1 mb-3">You've come to the right place!</h1>
            {/* <h1 className="h1-2">
              Hit the button below and let's get you set up.
            </h1> */}
            <Link to="/programmes">
              <button className="btn btn-lg btn-getstarted px-5 mt-3">
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
