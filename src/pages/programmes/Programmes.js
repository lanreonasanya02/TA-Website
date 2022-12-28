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

            <p className="lead">
              Develop job-ready digital skills for as few as 15 hours per week -
              physically and online where you can choose when and where it’s
              convenient for you to learn.
            </p>
          </div>
        </div>

        <div className="after-hero">
          <div className="container after-hero-content">
            <h1 className="">
              Find The B<span>est Program</span>me For You!
            </h1>
            <p className="my-5 lead">
              Choose from our range of programmes to begin your tech career.
              Discounts up to 25% this season. Select a course now to book a
              seat.
            </p>

            {/* Cards */}

            <div className="main-story-section">
              {/* Card 1 */}
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
                      ombucha chillwave njoenvjevnoerr nooewrnfveovne nernok
                      fanny pack 3 wolf moon street art photo booth before they
                      sold out organic viral.
                    </p>
                  </div>

                  <p className="card-text price" id="price">
                    Price: <del>₦400,000</del>{" "}
                    <span className="ms-2 lead">₦300,000</span>
                  </p>
                  <Link
                    to="/programmes/javascript-full-stack-web-development"
                    className="card-button"
                  >
                    <span>Enroll</span>
                  </Link>
                </div>
              </div>

              {/* Card 2 */}
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
                      ombucha chillwave njoenvjevnoerr nooewrnfveovne nernok
                      fanny pack 3 wolf moon street art photo booth before they
                      sold out organic viral.
                    </p>
                  </div>

                  <p className="card-text price" id="price">
                    Price: <span className="ms-2 lead">NA</span>
                  </p>
                  <Link to="/programmes/enroll-course" className="card-button">
                    <span>Enroll</span>
                  </Link>
                </div>
              </div>

              {/* Card 3 */}
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
                      ombucha chillwave njoenvjevnoerr nooewrnfveovne nernok
                      fanny pack 3 wolf moon street art photo booth before they
                      sold out organic viral.
                    </p>
                  </div>
                  <p className="card-text price" id="price">
                    Price: <del>₦250,000</del>{" "}
                    <span className="ms-2 lead">₦212,500</span>
                  </p>
                  <Link
                    to="/programmes/front-end-web-development"
                    className="card-button"
                  >
                    <span>Enroll</span>
                  </Link>
                </div>
              </div>

              {/* Card 4 */}
              <div className="card ">
                <div className="card-header category-cont">
                  <p className="image-text">
                    Beginner class, 8 weeks at 10hrs/week
                  </p>
                </div>

                <div className="card-body card-info">
                  <div className="title-container">
                    <h5 className="card-title mb-3 fw-bold title">
                      Back-End Web Development (NodeJS)
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
                    Price: <span className="ms-2 lead">₦200,000</span>
                  </p>
                  <Link
                    to="/programmes/back-end-web-development"
                    className="card-button"
                  >
                    <span>Enroll</span>
                  </Link>
                </div>
              </div>

              {/* Card 5 */}
              <div className="card ">
                <div className="card-header category-cont">
                  <p className="image-text">
                    Advanced class, 4 weeks at 9hrs/week
                  </p>
                </div>

                <div className="card-body card-info">
                  <div className="title-container">
                    <h5 className="card-title mb-3 fw-bold title">
                      JavaScript MasterClass
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
                    Price: <span className="ms-2 lead">₦100,000</span>
                  </p>
                  <Link to="/programmes/js-masterclass" className="card-button">
                    <span>Enroll</span>
                  </Link>
                </div>
              </div>

              {/* Card 6 */}
              <div className="card ">
                <div className="card-header category-cont">
                  <p className="image-text">
                    Advanced class, 4 weeks at 9hrs/week
                  </p>
                </div>

                <div className="card-body card-info">
                  <div className="title-container">
                    <h5 className="card-title mb-3 fw-bold title">
                      ReactJS MasterClass
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
                    Price: <span className="ms-2 lead">₦100,000</span>
                  </p>
                  <Link
                    to="/programmes/reactjs-masterclass"
                    className="card-button"
                  >
                    <span>Enroll</span>
                  </Link>
                </div>
              </div>

              {/* Card 7 */}
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
                      ombucha chillwave njoenvjevnoerr nooewrnfveovne nernok
                      fanny pack 3 wolf moon street art photo booth before they
                      sold out organic viral.
                    </p>
                  </div>

                  <p className="card-text price" id="price">
                    Price: <span className="ms-2 lead">NA</span>
                  </p>
                  <Link to="/programmes/enroll-course" className="card-button">
                    <span>Enroll</span>
                  </Link>
                </div>
              </div>

              {/* Card 8 */}
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
                    <span>Enroll</span>
                  </Link>
                </div>
              </div>

              {/* Card 9 */}
              <div className="card ">
                <div className="card-header category-cont">
                  <p className="image-text">
                    Advanced class, 8 weeks at 8hrs/week
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
                      ombucha chillwave njoenvjevnoerr nooewrnfveovne nernok
                      fanny pack 3 wolf moon street art photo booth before they
                      sold out organic viral.
                    </p>
                  </div>
                  <p className="card-text price" id="price">
                    Price: <span className="ms-2 lead">NA</span>
                  </p>
                  <Link to="/programmes/enroll-course" className="card-button">
                    <span>Enroll</span>
                  </Link>
                </div>
              </div>

              {/* Card 10 */}
              <div className="card ">
                <div className="card-header category-cont">
                  <p className="image-text">
                    Advanced class, 8 weeks at 8hrs/week
                  </p>
                </div>

                <div className="card-body card-info">
                  <div className="title-container">
                    <h5 className="card-title mb-3 fw-bold title">
                      Data Analysis (Microsoft Excel, Power BI)
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
                    Price: <span className="ms-2 lead">₦100,000</span>
                  </p>
                  <Link to="/programmes/data-analysis" className="card-button">
                    <span>Enroll</span>
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
