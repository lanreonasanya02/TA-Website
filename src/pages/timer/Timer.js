import React from "react";
import "./Timer.css";
import "./TMediaQueries.css";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";

const Timer = () => {
  // Countdown Timer
  const countDown = () => {
    const countDate = new Date("January 9, 2023 00:00:00").getTime();
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

  // Countdown Timer Dismiss
  function dismissSection() {
    document.querySelector(".timer-section").style.display = "none";
  }

  return (
    <div className="timer-section">
      <div className="timers text-white container">
        <div className=" cohort">
          <p>
            The next JavaScript Full-stack cohort begins on the 9th of January,
            2023. Early birds get up to <span>25%</span> off.{" "}
            <Link to="/programmes/enroll"> Click to register</Link> 😊
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

export default Timer;
