import React, { useEffect } from "react";
import "../programmes/Programmes.css";
import "../programmes/PMediaQueries.css";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Programmes = () => {
  // Scroll To top
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="programmes">
        <Navbar />
        <div className="programmes-hero container">
          <div className="programmes-hero-text">
            <h1 className="">Anyone can write code.</h1>
            <h1 className="display-4 inner-text fw-bold">
              Not everyone can speak it as fluently as we do!
            </h1>

            <p className="lead"></p>
          </div>
        </div>

        <div className="after-hero">
          <div className="container-lg after-hero-content">
            <h1 className="">
              Find The B<span>est Program</span>me For You!
            </h1>
            <p className="mt-5 lead">
              We know switching careers for newbies can be very daunting,
              however, our beginner-friendly currriculum and structure were
              tailored just for you to help you advance seamlessly and
              fully-equipped to make you job-ready. Learn digital skills for as
              few as 6 hours per week - physically or online where you can
              choose when and where it’s convenient for you to learn.
            </p>

            <p className="mb-5 lead">
              Choose from our range of programmes to begin your tech career.
            </p>

            {/* Cards */}

            <div className="main-story-section">
              {/* JS Fullstack */}
              <div className="card ">
                <div className="card-header category-cont">
                  <p className="image-text">
                    Beginner class, 20 weeks at 15hrs/week
                  </p>
                </div>

                <div className="card-body card-info">
                  <div className="title-container">
                    <h5 className="card-title mb-3 fw-bold title">
                      JavaScript Full-stack Web Development
                    </h5>
                  </div>
                  <div className="body-container">
                    <p className="card-text text-muted desc">
                      Acquire competitive edge as a JavaScript Full-stack web
                      developer by learning web development using tools such as
                      HTML5, CSS3/Bootstrap5, JavaScript, ReactJS, RESTful APIs,
                      NodeJS, ExpressJS, MongoDB/Mongoose etc
                    </p>
                  </div>

                  <p className="card-text price" id="price">
                    Price: <span className="ms-2 lead">₦400,000</span>
                  </p>
                  <Link
                    to="/programmes/javascript-full-stack-web-development"
                    className="card-button"
                  >
                    <span
                      className="tt"
                      data-bs-placement="bottom"
                      title="Click here to enroll for this program"
                    >
                      Enroll
                    </span>
                  </Link>
                </div>
              </div>

              {/* Python */}
              <div className="card ">
                <div className="card-header category-cont">
                  <p className="image-text">
                    Beginner class, 20 weeks at 15hrs/week
                  </p>
                </div>

                <div className="card-body card-info">
                  <div className="title-container">
                    <h5 className="card-title mb-3 fw-bold title">
                      Python Full-Stack Web Development
                    </h5>
                  </div>
                  <div className="body-container">
                    <p className="card-text text-muted desc">
                      Learn Python for developing web applications for storing
                      and manipulating complex data using tools such as HTML5,
                      CSS3/Bootstrap5, Responsive Design, JavaScript, ReactJS,
                      RESTful APIs, Python, Django etc
                    </p>
                  </div>

                  <p className="card-text price" id="price">
                    Price: <span className="ms-2 lead">₦400,000</span>
                  </p>
                  <Link to="/programmes/enroll-course" className="card-button">
                    <span
                      className="tt"
                      data-bs-placement="bottom"
                      title="Click here to enroll for this program"
                    >
                      Enroll
                    </span>
                  </Link>
                </div>
              </div>

              {/* Front-end */}
              <div className="card ">
                <div className="card-header category-cont">
                  <p className="image-text">
                    Beginner class, 12 weeks at 15hrs/week
                  </p>
                </div>

                <div className="card-body card-info">
                  <div className="title-container">
                    <h5 className="card-title mb-3 fw-bold title">
                      Front-End Web Development (ReactJS)
                    </h5>
                  </div>
                  <div className="body-container">
                    <p className="card-text text-muted desc">
                      This program is suitable for people who have little or
                      zero knowledge about programming or how the web works.
                      Become a Front-end engineer by learning front-end tools
                      such as HTML5, CSS3/Bootstrap5, Responsive Design,
                      JavaScript, ReactJS, RESTful APIs etc
                    </p>
                  </div>
                  <p className="card-text price" id="price">
                    Price:
                    <span className="ms-2 lead">₦200,000</span>
                  </p>
                  <Link
                    to="/programmes/front-end-web-development"
                    className="card-button"
                  >
                    <span
                      className="tt"
                      data-bs-placement="bottom"
                      title="Click here to enroll for this program"
                    >
                      Enroll
                    </span>
                  </Link>
                </div>
              </div>

              {/* Back-end */}
              <div className="card ">
                <div className="card-header category-cont">
                  <p className="image-text">
                    Beginner class, 8 weeks at 15hrs/week
                  </p>
                </div>

                <div className="card-body card-info">
                  <div className="title-container">
                    <h5 className="card-title mb-3 fw-bold title">
                      Back-End Web Development (NodeJS/Python)
                    </h5>
                  </div>
                  <div className="body-container">
                    <p className="card-text text-muted desc">
                      Learn how to create back-end services with JavaScript or
                      Python using tools such as NodeJS, ExpressJS,
                      MongoDB/Mongoose, Python, Django etc for creating web
                      servers, creating APIs and integrating backend services
                      with frontend applications.
                    </p>
                  </div>
                  <p className="card-text price" id="price">
                    Price: <span className="ms-2 lead">₦200,000</span>
                  </p>
                  <Link
                    to="/programmes/back-end-web-development"
                    className="card-button"
                  >
                    <span
                      className="tt"
                      data-bs-placement="bottom"
                      title="Click here to enroll for this program"
                    >
                      Enroll
                    </span>
                  </Link>
                </div>
              </div>

              {/* Advanced JS */}
              <div className="card ">
                <div className="card-header category-cont">
                  <p className="image-text">
                    Beginner class, 4 weeks at 15hrs/week
                  </p>
                </div>

                <div className="card-body card-info">
                  <div className="title-container">
                    <h5 className="card-title mb-3 fw-bold title">
                      JavaScript Intensive
                    </h5>
                  </div>
                  <div className="body-container">
                    <p className="card-text text-muted desc">
                      ombucha chillwave njoenvjevnoerr nooewrnfveovne nernok
                      fanny pack 3 wolf moon street art photo booth before they
                      sold out organic viral.
                    </p>
                  </div>

                  <p className="card-text price" id="price">
                    Price: <del>₦100,000</del>
                    <span className="ms-2 lead">₦50,000</span>
                  </p>
                  <Link to="/programmes/js-masterclass" className="card-button">
                    <span
                      className="tt"
                      data-bs-placement="bottom"
                      title="Click here to enroll for this program"
                    >
                      Enroll
                    </span>
                  </Link>
                </div>
              </div>

              {/* Advanced React */}
              <div className="card ">
                <div className="card-header category-cont">
                  <p className="image-text">
                    Beginner class, 4 weeks at 15hrs/week
                  </p>
                </div>

                <div className="card-body card-info">
                  <div className="title-container">
                    <h5 className="card-title mb-3 fw-bold title">
                      ReactJS Intensive
                    </h5>
                  </div>
                  <div className="body-container">
                    <p className="card-text text-muted desc">
                      Take your React skills up a notch by enrolling for this
                      intensive ReactJS program. Here, you'd learn the skills
                      you need to become a ReactJS professional. Master ReactJS
                      hooks, router DOM, conditional rendering, props, ReactJS
                      components etc
                    </p>
                  </div>

                  <p className="card-text price" id="price">
                    Price: <del>₦100,000</del>
                    <span className="ms-2 lead">₦50,000</span>
                  </p>
                  <Link
                    to="/programmes/reactjs-masterclass"
                    className="card-button"
                  >
                    <span
                      className="tt"
                      data-bs-placement="bottom"
                      title="Click here to enroll for this program"
                    >
                      Enroll
                    </span>
                  </Link>
                </div>
              </div>

              {/* Product design */}
              <div className="card ">
                <div className="card-header category-cont">
                  <p className="image-text">
                    Beginner class, 10 weeks at 10hrs/week
                  </p>
                </div>

                <div className="card-body card-info">
                  <div className="title-container">
                    <h5 className="card-title mb-3 fw-bold title">
                      Product Design
                    </h5>
                  </div>
                  <div className="body-container">
                    <p className="card-text text-muted desc">
                      Become a product designer by acquiring foundational skills
                      for User Interface/User Experience (UI/UX) for creating
                      development-ready designs for mobile apps, desktop apps,
                      or web platforms and for building a design portfolio.
                    </p>
                  </div>

                  <p className="card-text price" id="price">
                    Price: <span className="ms-2 lead">₦200,000</span>
                  </p>
                  <Link to="/programmes/enroll-course" className="card-button">
                    <span
                      className="tt"
                      data-bs-placement="bottom"
                      title="Click here to enroll for this program"
                    >
                      Enroll
                    </span>
                  </Link>
                </div>
              </div>

              {/* Graphics Design */}
              <div className="card ">
                <div className="card-header category-cont">
                  <p className="image-text">
                    Beginner class, 4 weeks at 6hrs/week
                  </p>
                </div>

                <div className="card-body card-info">
                  <div className="title-container">
                    <h5 className="card-title mb-3 fw-bold title">
                      Graphics Design
                    </h5>
                  </div>
                  <div className="body-container">
                    <p className="card-text text-muted desc">
                      ombucha chillwave njoenvjevnoerr nooewrnfveovne nernok
                      fanny pack 3 wolf moon street art photo booth before they
                      sold out organic viral.
                    </p>
                  </div>
                  <p className="card-text price" id="price">
                    Price: <span className="ms-2 lead">NA</span>
                  </p>
                  <Link to="/programmes/enroll-course" className="card-button">
                    <span
                      className="tt"
                      data-bs-placement="bottom"
                      title="Click here to enroll for this program"
                    >
                      Enroll
                    </span>
                  </Link>
                </div>
              </div>

              {/* Data science */}
              <div className="card ">
                <div className="card-header category-cont">
                  <p className="image-text">
                    Beginner class, 8 weeks at 8hrs/week
                  </p>
                </div>

                <div className="card-body card-info">
                  <div className="title-container">
                    <h5 className="card-title mb-3 fw-bold title">
                      Data Science
                    </h5>
                  </div>
                  <div className="body-container">
                    <p className="card-text text-muted desc">
                      This program is structured to teach you the fundamental
                      data science programming tools (Python, SQL, Git) and to
                      guide you through what you need to know to start a career
                      as a Data Scientist from the basics.
                    </p>
                  </div>
                  <p className="card-text price" id="price">
                    Price: <span className="ms-2 lead">₦150,000</span>
                  </p>
                  <Link to="/programmes/enroll-course" className="card-button">
                    <span
                      className="tt"
                      data-bs-placement="bottom"
                      title="Click here to enroll for this program"
                    >
                      Enroll
                    </span>
                  </Link>
                </div>
              </div>

              {/* Data analysis */}
              <div className="card ">
                <div className="card-header category-cont">
                  <p className="image-text">
                    Beginner class, 8 weeks at 8hrs/week
                  </p>
                </div>

                <div className="card-body card-info">
                  <div className="title-container">
                    <h5 className="card-title mb-3 fw-bold title">
                      Data Analysis <br /> (MS Excel, Power BI)
                    </h5>
                  </div>
                  <div className="body-container">
                    <p className="card-text text-muted desc">
                      Become a professional data analyst using tools such as
                      Microsoft Excel and Power BI for data analysis,
                      interpretations and visualizations
                    </p>
                  </div>
                  <p className="card-text price" id="price">
                    Price: <span className="ms-2 lead">₦100,000</span>
                  </p>
                  <Link to="/programmes/data-analysis" className="card-button">
                    <span
                      className="tt"
                      data-bs-placement="bottom"
                      title="Click here to enroll for this program"
                    >
                      Enroll
                    </span>
                  </Link>
                </div>
              </div>

              {/* })} */}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Programmes;
