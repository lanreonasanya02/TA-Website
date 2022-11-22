import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import "./CourseNotFound.css";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

const NotFound = () => {
  // Scroll To top
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  // Go back to website from error page
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="course-error-page">
      <Navbar />

      <div
        className="text-center text-white container error-text"
        style={{ height: "100vh" }}
      >
        <h1 className="display-1">Course Unavailable</h1> <br />
        <p className="lead">
          Sorry! The course is not available at the moment.
        </p>
        <p className="lead">
          If you{" "}
          <Link to="/contact" className="link-to-contact">
            fill the form in the Contact Us
          </Link>{" "}
          page, we promise to notify you when the course becomes available.
        </p>
        <br />
        <p className="container pt-4 text-white">
          <Link to="#" onClick={goBack}>
            {" "}
            <MdOutlineArrowBackIosNew /> Return to Programmes page
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
