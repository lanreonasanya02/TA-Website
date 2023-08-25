import React, { useEffect } from "react";
import "../programmes/Programmes.css";
import "../programmes/PMediaQueries.css";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import ScrollToTop from "../scroll-to-top/ScrollToTop";

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
            <h1>
              Find The B<span>est Progr</span>am For You!
            </h1>
            <p>
              We know switching careers for newbies can be very daunting,
              however, our beginner-friendly currriculum and structure were
              tailored just for you to help you advance seamlessly and
              fully-equipped to make you job-ready. Learn digital skills for as
              few as 6 hours per week - physically or online where you can
              choose when and where it’s convenient for you to learn.
            </p>

            <p className="mb-5">
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
                      Dive into our JavaScript Full Stack Web Development
                      Program. From frontend to backend, master the art of
                      creating dynamic web apps. Don't miss out – register now
                      for boundless coding opportunities
                    </p>
                  </div>

                  <p className="card-text price" id="price">
                    Price: <del>₦400,000</del>
                    <span className="ms-2 lead">₦300,000</span>
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
                      Embark on a Python Full Stack Web Development journey.
                      Gain prowess in crafting interactive user interfaces and
                      robust server-side architecture. Enroll today to shape the
                      digital landscape.
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
                      Step into Frontend Web Development. Craft captivating
                      interfaces, responsive designs, and interactive
                      experiences. Secure your spot and lead in shaping digital
                      experiences!
                    </p>
                  </div>
                  <p className="card-text price" id="price">
                    Price: <del>₦250,000</del>
                    <span className="ms-2 lead">₦150,000</span>
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

              {/* React Native */}
              <div className="card ">
                <div className="card-header category-cont">
                  <p className="image-text">
                    Beginner class, 8 weeks at 15hrs/week
                  </p>
                </div>

                <div className="card-body card-info">
                  <div className="title-container">
                    <h5 className="card-title mb-3 fw-bold title">
                      React Native <br />
                      (Mobile Development)
                    </h5>
                  </div>
                  <div className="body-container">
                    <p className="card-text text-muted desc">
                      Embark on an immersive React Native journey. Hone
                      cross-platform app development, UI components, and native
                      performance. Enroll to craft innovative mobile
                      experiences.
                    </p>
                  </div>
                  <p className="card-text price" id="price">
                    Price: <span className="ms-2 lead">₦150,000</span>
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
                    Beginner class, 6 weeks at 15hrs/week
                  </p>
                </div>

                <div className="card-body card-info">
                  <div className="title-container">
                    <h5 className="card-title mb-3 fw-bold title">
                      Back-End Web Development (NodeJS/Django)
                    </h5>
                  </div>
                  <div className="body-container">
                    <p className="card-text text-muted desc">
                      Dive into Backend Development. Master server-side
                      architecture, data management, and functionality. Secure
                      your spot today and forge the backbone of tomorrow's
                      digital landscape.
                    </p>
                  </div>
                  <p className="card-text price" id="price">
                    Price: <del>₦150,000</del>
                    <span className="ms-2 lead">₦100,000</span>
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
                    Advanced class, 4 weeks at 15hrs/week
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
                      Immerse yourself in our intensive JavaScript training.
                      Master the language's intricacies, DOM manipulation, and
                      dynamic app creation. Enroll now to become a JavaScript
                      virtuoso.
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
                    Advanced class, 4 weeks at 15hrs/week
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
                      Elevate your ReactJS skills in our intensive program.
                      Master component-driven UI, state management, and modern
                      web app development. Enroll for dynamic user experience
                      excellence.
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
                      Delve into Product Design. Gain UX expertise, prototyping
                      skills, and design aesthetics. Enroll now to shape
                      user-centered solutions and create compelling digital
                      experiences.
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
                      Embark on a creative journey in Graphics Design. Master
                      visual communication, design principles, and unleash your
                      artistic prowess. Enroll now to craft captivating and
                      impactful visuals.
                    </p>
                  </div>
                  <p className="card-text price" id="price">
                    Price: <span className="ms-2 lead">₦80,000</span>
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
                      Venture into Data Science. Acquire statistical analysis,
                      machine learning, and data visualization skills. Enroll
                      now to unlock insights, solve complex problems, and drive
                      data-driven decisions
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
                      Master Data Analysis with MS Excel and Power BI. Acquire
                      statistical insights, visualization, and problem-solving
                      skills. Enroll now to uncover trends, extract conclusions,
                      and drive informed decisions.
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
        <ScrollToTop />
      </div>
    </>
  );
};

export default Programmes;
