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
            The next JavaScript Full-stack cohort begins on the 9th of January,
            2023. Early birds get up to <span>25% off</span> .{" "}
            <Link to="/programmes/javascript-full-stack-web-development">
              {" "}
              Click to register
            </Link>{" "}
            😊
          </p>

          <p className="mobile-banner">
            The next JavaScript Full-stack cohort begins on the 9th of January,
            2023. Early birds get <span>up to 25% off.</span>
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
          data-bs-toggle="tooltip"
          data-bs-title="dismiss"
        />
      </div>
    </div>
  );
};

export default Banner;
