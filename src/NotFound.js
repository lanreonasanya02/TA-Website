import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./pages/navbar/Navbar";
import "./NotFound.css";
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
    <div className="error-page">
      <Navbar />

      <p className="container pt-4 text-white">
        <Link to="#" onClick={goBack}>
          {" "}
          <MdOutlineArrowBackIosNew /> Go Back
        </Link>
      </p>
      <div
        className="text-center text-white container"
        style={{ height: "100vh" }}
      >
        <h1 className="display-1">404</h1>
        <p className="">
          Oops....We could not find the page you requested. <br /> Could be that
          the page is not available at the moment or there is a typo in your
          address.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
