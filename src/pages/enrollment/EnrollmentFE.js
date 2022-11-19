import React, { useEffect } from "react";
import "../enrollment/Enrollment.css";
import "../enrollment/EMediaQueries.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import JSSyllabus from "../../images/jsfs.pdf";

const EnrollmentFE = () => {
  // Scroll To top
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  // Go back to website from error page
  const goBack = () => {
    window.history.back();
  };

  return (
    <section className="enroll">
      <Navbar />
      <div className="enroll-heading">
        <h1 className="">Book A Seat</h1>
      </div>

      <div className="enroll-form">
        <div className="container">
          <p className="text-danger go-back">
            <Link to="#" onClick={goBack}>
              {" "}
              <MdOutlineArrowBackIosNew className="go-back-icon" />{" "}
              <span>Return to programmes</span>
            </Link>
          </p>
          <h1 className="text-center">Front-End Web Development Programme</h1>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
            illum dicta inventore, error vel consequatur modi sed nobis.
            Adipisci aliquid praesentium ea! Cupiditate iure fugit debitis
            obcaecati perspiciatis dolorum, corrupti natus! Deleniti accusantium
            animi recusandae aliquid nihil, expedita nemo nesciunt.
          </p>

          <div className="subscription">
            <div className="sub-form">
              <form action="" method="">
                <p>Kindly fill all required* fields</p>
                <div className="subscribed">
                  <label htmlFor="">Course</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Front-End Web Development"
                    disabled
                  />
                </div>

                <div className="title">
                  <label htmlFor="">Title*</label>
                  <select name="" id="" className="">
                    <option value="">Mr.</option>
                    <option value="">Mrs.</option>
                    <option value="">Miss.</option>
                  </select>
                </div>

                <div className="names">
                  <label htmlFor="">First Name*</label>
                  <input type="text" name="" id="" required />
                </div>

                <div className="names">
                  <label htmlFor="">Last Name*</label>
                  <input type="text" name="" id="" required />
                </div>

                <div className="email">
                  <label htmlFor="">Email Address*</label>
                  <input type="email" name="" id="" required />
                </div>

                <div className="phone">
                  <label htmlFor="">Telephone*</label>
                  <input type="tel" name="" id="" required />
                </div>

                <div className="mode">
                  <label htmlFor="">Mode of learning*</label>
                  <select name="" id="" className="">
                    <option value="">Physical</option>
                    <option value="">Virtual(Classroom)</option>
                    <option value="">Virtual(Online)</option>
                  </select>
                </div>

                <div className="cohort">
                  <label htmlFor="">Cohort*</label>
                  <select name="" id="" className="">
                    <option value="">Weekdays</option>
                    <option value="">Weekends</option>
                  </select>
                </div>

                <div className="reason">
                  <label htmlFor="">Reason for taking the course?*</label>
                  <select name="" id="" className="">
                    <option value="">I am switching careers</option>
                    <option value="">To upgrade my current skills</option>
                  </select>
                </div>

                <div className="learn-about-us">
                  <label htmlFor="">How did you learn about us?*</label>
                  <select name="" id="" className="" required>
                    <option value="">Instagram</option>
                    <option value="">Twitter</option>
                    <option value="">LinkedIn</option>
                    <option value="">A friend</option>
                    <option value="">Website</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="">Order of names on certificate*</label>
                  <input type="text" name="" id="" required />
                </div>

                <div className="enroll-btn">
                  <button className="enroll-submit register">Register</button>
                  <a
                    href={JSSyllabus}
                    className="btn enroll-submit download-btn"
                    target="_blank"
                  >
                    Download Syllabus
                  </a>
                </div>
              </form>
            </div>

            <div className="information">
              <h5 className="">Important Information</h5>

              <ul>
                <li>Your laptop will be your most important tool</li>
                <li>
                  English will be our main language so you should be fluent in
                  speaking and writing
                </li>
                <li>
                  A mail will be sent to your email after registering with steps
                  to take on how to pay and enroll for the chosen course(s)
                </li>
                <li>
                  After payment, please call 08136128748 to confirm your payment
                  and get you onboard
                </li>
                <li>
                  Classes will take place at No. 33a Odozie street, Ojodu
                  Berger, Lagos State, Nigeria
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default EnrollmentFE;
