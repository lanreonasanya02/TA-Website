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

  // Countdown Timer
  const countDown = () => {
    const countDate = new Date("February 13, 2023 00:00:00").getTime();
    const today = new Date().getTime();
    const difference = countDate - today;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(difference / day);
    const textHour = Math.floor((difference % day) / hour);
    const textMinute = Math.floor((difference % hour) / minute);
    const textSecond = Math.floor((difference % minute) / second);

    document.querySelector(".day").textContent =
      textDay < 10 ? `0${textDay}` : `${textDay}`;
    document.querySelector(".hour").textContent =
      textHour < 10 ? `0${textHour}` : `${textHour}`;
    document.querySelector(".minute").textContent =
      textMinute < 10 ? `0${textMinute}` : `${textMinute}`;
    document.querySelector(".second").textContent =
      textSecond < 10 ? `0${textSecond}` : `${textSecond}`;
  };

  setInterval(countDown, 1000);

  return (
    <div className="timer-section">
      <div className="timers text-white container">
        <div className=" cohort">
          <p className="desktop-banner">
            The next Data Analysis cohort begins on the 4th of February, 2023.
            Early birds get up to <span>10% off</span>. {"   "}
            <span
              className="tt"
              data-bs-placement="bottom"
              title="Click to register"
            >
              <Link to="/programmes/data-analysis" className="banner-link">
                <u>Register here</u>
              </Link>
            </span>
          </p>

          <div className="mobile-banner">
            <p>
              JavaScript Intensive starts in
              <Link to="/programmes/javascript-full-stack-web-development">
                {" "}
                Register here
              </Link>
            </p>

            {/* Timer */}

            <div className="banner-timer">
              <p className="text-center">
                <span className="number day">00</span>{" "}
                <span className="period">DAYS</span>
              </p>

              <p className="text-center">
                <span className="number hour">00</span>{" "}
                <span className="period">HOURS</span>
              </p>

              <p className="text-center">
                <span className="number minute">00</span>{" "}
                <span className="period">MINS</span>
              </p>

              <p className="text-center">
                <span className="number second">00</span>{" "}
                <span className="period">SECS</span>
              </p>

              <div className="close-icon-mobile" data-tooltip="Close">
                <MdOutlineClose
                  className="icon4close"
                  onClick={dismissSection}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="close-icon-desktop">
        <span className="tt" data-bs-placement="bottom" title="Close">
          <MdOutlineClose className="icon4close" onClick={dismissSection} />
        </span>
      </div>
    </div>
  );
};

export default Banner;
