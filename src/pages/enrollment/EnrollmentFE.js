import React, { useEffect } from "react";
import "../enrollment/Enrollment.css";
import "../enrollment/EMediaQueries.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import frontend from "../../images/FE.pdf";

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
        <div className="container-lg">
          <p className="text-danger go-back">
            <Link to="#" onClick={goBack}>
              {" "}
              <MdOutlineArrowBackIosNew className="go-back-icon" />{" "}
              <span>Return to programs</span>
            </Link>
          </p>
          <h1 className="text-center">Front-End Web Development Programme</h1>

          <p>
            This program has an intensive training curriculum, designed to build
            your knowledge from scratch. This program is suitable for those who
            have little or zero knowledge about programming or how the web
            works. Here, you'd learn how to create web pages using tools like
            HTML, CSS, Bootstrap for responsive designs, use git & github for
            version control, query databases, implement unit testing, optimize
            performance and how to debug errors. If this sounds interesting to
            you, register below!
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
                  <label htmlFor="">Track*</label>
                  <select name="" id="" className="">
                    <option value="">Weekdays (Mon - Wed)</option>
                    <option value="">Weekends (Sat & Sun)</option>
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
                    href={frontend}
                    className="btn enroll-submit download-btn"
                    target="_blank"
                  >
                    Download Syllabus
                  </a>
                </div>
              </form>
            </div>

            <div className="information">
              <div className="require">
                <h5 className="">Course Requirements</h5>

                <ul>
                  <li>
                    Your laptop will be your most important tool. Please ensure
                    that your computer has at least a 6GB worth of internal
                    memory.
                  </li>
                  <li>
                    Please ensure that you are available for classes when the
                    program kicks off. If you are unsure about your
                    availability, please do not subscribe for this program yet.
                    As soon as the program kicks off, there would be no time for
                    recaps or repetitions.
                  </li>
                  <li>
                    COMMITMENT & CONSISTENCY are two important ingredients that
                    you must possess in order for you to gain value from the
                    program you paid for!
                  </li>
                </ul>
              </div>

              <div className="notice">
                <h5 className="">Important Information</h5>

                <ul>
                  <li>
                    Please ensure to download the program syllabus before making
                    payment to ensure that you are satisfied with the program
                    schedule and curriculum.
                  </li>
                  <li>
                    After payment is made for a program, please note that there
                    would be no refund of money arising from cancellation of
                    program from a student.
                  </li>
                  <li>
                    Physical classes will take place at No. 33a Odozi street,
                    Ojodu Berger, Lagos State, Nigeria.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default EnrollmentFE;
