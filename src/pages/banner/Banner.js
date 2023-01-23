import React from "react";
import "./Banner.css";
import "./BMediaQueries.css";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";

const Banner = () => {
  // Countdown Timer Dismiss
  function dismissSection() {
    document.querySelector(".timer-section").style.display = "none";
  }

  return (
    <div className="timer-section">
      <div className="timers text-white container">
        <div className=" cohort">
          <p className="desktop-banner">
            The next Data Analysis cohort begins on the 4th of February, 2023.
            Early birds get up to <span>10% off</span>. {"   "}
            <Link to="/programmes/data-analysis" className="banner-link">
              <u>Register here</u>
            </Link>
          </p>

          <p className="mobile-banner">
            The next Data Analysis cohort begins on the 4th of February, 2023.
            Early birds get <span>up to 10% off.</span>
            <Link to="/programmes/javascript-full-stack-web-development">
              {" "}
              Click to register
            </Link>
          </p>
        </div>
      </div>

      <div className="close-icon">
        <MdOutlineClose
          className="icon4close "
          onClick={dismissSection}
          data-bs-toggle="tool-tip"
          data-bs-title="Close"
        />
      </div>
    </div>
  );
};

export default Banner;
