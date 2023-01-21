import React, { useEffect } from "react";
import Navbar from "../navbar/Navbar";
// import Skills from "./Skills";
import "./About.css";
import "./AMediaQueries.css";
import student from "../../images/Web_3.webp";
import theophilus from "../../images/theo-nobg.png";
import rita from "../../images/rita-nobg.png";
import tewogbade from "../../images/tewo-nobg.png";
import nas from "../../images/nas-nobg.png";
import chuks from "../../images/chuks-nobg.png";
import Footer from "../footer/Footer";

const About = () => {
  // Scroll To top
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="about">
      <Navbar />
      <div className="about-heading">
        <h1 className="">Why Choose Us?</h1>
      </div>

      <div className="about-body">
        <div className="container">
          <div className="brief">
            <div className="brief-text">
              {/* <h3 className="brief-text-head">
                Ou<span>r Cre</span>ed
              </h3> */}

              <p>
                <span className="first-letter">A</span>t Tech Accent, it is not
                just about learning HTML/CSS or about becoming a frontend or a
                backend or even a full stack developer. It transcends just
                learning programming and learning how to write codes. We are
                even more passionate about helping you learn to ‘speak’ tech
                fluently. We have made it our sole priority to help you
                accelerate your dream and desire to become a world-class
                software developer or designer, whether or not you have prior
                knowledge or experience.
              </p>

              <p>
                We understand the complexities surrounding programming in its
                entirety and as such, we intend to use this course to demystify
                programming to the most basic level to take you from a complete
                novice to mastery level and to make you job-ready at the end of
                the course.
              </p>
            </div>

            <div className="brief-image">
              {/* <div className="box4image"></div> */}

              <img
                src={student}
                alt="student"
                className="actual-image2"
                width="60%"
              />
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="about-end mt-5">
          <div className="container">
            <div className="container about-content">
              <h1 className="">
                Tes<span>timoni</span>als
              </h1>
            </div>

            <div
              id="carouselExampleControls"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                {/* Rita */}
                <div class="carousel-item carou-item-1 active">
                  <div className="row">
                    <div className="col-lg-6 col-12 left-image rita">
                      <img src={rita} class="d-block" alt="..." width="50%" />
                    </div>

                    {/* Mobile */}
                    <div className="mobile-carou-text col-12 text-center">
                      <h1>Rita Chiaha</h1>
                      <p>Lagos, Nigeria</p>
                      <p className="lead">
                        "At first, I wasn't confident in myself that I could fit
                        into the tech world because I had no prior experience or
                        knowledge about coding. While looking for a perfect
                        school to help me do that, I stumbled upon TECH ACCENT
                        and today I can proudly call myself a full-stack
                        developer. Tech Accent did not only boost my confidence
                        but also helped me master the skills I needed in my
                        career as a full-stack developer."
                      </p>
                    </div>

                    {/* Desktop */}
                    <div className="carou-text col-lg-6 col-12">
                      <p className="">
                        "At first, I wasn't confident in myself that I could fit
                        into the tech world because I had no prior experience or
                        knowledge about coding. While looking for a perfect
                        school to help me do that, I stumbled upon TECH ACCENT
                        and today I can proudly call myself a full-stack
                        developer. Tech Accent did not only boost my confidence
                        but also helped me master the skills I needed in my
                        career as a full-stack developer."
                      </p>
                      <h1>Rita Chiaha</h1>
                      <p>Lagos, Nigeria</p>
                    </div>
                  </div>
                </div>

                {/* Nasiru */}
                <div class="carousel-item carou-item-1">
                  <div className="row nas">
                    <div className="carou-text col-lg-6 ps-4">
                      <p className="lead text-muted">
                        "Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Odit dicta provident tempore numquam pariatur
                        recusandae porro est repellat dolore asperiores."
                      </p>
                      <h1>Nasiru Aimanosi</h1>
                      <p>Lagos, Nigeria</p>
                    </div>

                    {/* Mobile */}
                    <div className="mobile-carou-text col-12 text-center">
                      <h1>Nasiru Aimanosi</h1>
                      <p>Lagos, Nigeria</p>
                      <p className="lead text-muted">
                        "Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Odit dicta provident tempore numquam pariatur
                        recusandae porro est repellat dolore asperiores."
                      </p>
                    </div>

                    <div className="col-lg-6 left-image nasiru">
                      <img src={nas} class="d-block" alt="..." width="54%" />
                    </div>
                  </div>
                </div>

                {/* Chuks */}
                <div class="carousel-item carou-item-1">
                  <div className="row">
                    <div className="col-lg-6 left-image chuks">
                      <img src={chuks} class="d-block" alt="..." width="75%" />
                    </div>

                    {/* Mobile */}
                    <div className="mobile-carou-text col-12 text-center">
                      <h1>Chuks Awa</h1>
                      <p>Dubai, UAE</p>
                      <p className="lead text-muted">
                        "Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Odit dicta provident tempore numquam pariatur
                        recusandae porro est repellat dolore asperiores."
                      </p>
                    </div>

                    {/* Desktop */}
                    <div className="carou-text col-lg-6">
                      <p className="lead text-muted">
                        "Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Odit dicta provident tempore numquam pariatur
                        recusandae porro est repellat dolore asperiores."
                      </p>
                      <h1>Chuks Awa</h1>
                      <p>Dubai, UAE</p>
                    </div>
                  </div>
                </div>

                {/* Tewogbade */}
                <div class="carousel-item carou-item-1">
                  <div className="row tewo">
                    <div className="carou-text col-lg-6 ps-4">
                      <p className="lead text-muted">
                        "Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Odit dicta provident tempore numquam pariatur
                        recusandae porro est repellat dolore asperiores."
                      </p>
                      <h1>Tewogbade Tella</h1>
                      <p>Lagos, Nigeria</p>
                    </div>
                    {/* Mobile */}
                    <div className="mobile-carou-text col-12 text-center">
                      <h1>Tewogbade Tella</h1>
                      <p>Lagos, Nigeria</p>
                      <p className="lead text-muted">
                        "Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Odit dicta provident tempore numquam pariatur
                        recusandae porro est repellat dolore asperiores."
                      </p>
                    </div>

                    <div className="col-lg-6 left-image tewogbade">
                      <img
                        src={tewogbade}
                        class="d-block"
                        alt="..."
                        width="74%"
                      />
                    </div>
                  </div>
                </div>

                {/* Theophilus */}
                <div class="carousel-item carou-item-1">
                  <div className="row">
                    <div className="col-lg-6 left-image sunday">
                      <img
                        src={theophilus}
                        class="d-block theophilus"
                        alt="..."
                        width="60.6%"
                      />
                    </div>

                    {/* Mobile */}
                    <div className="mobile-carou-text col-12 text-center">
                      <h1>Theophilus Sunday</h1>
                      <p>Lagos, Nigeria</p>
                      <p className="lead text-muted">
                        "Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Odit dicta provident tempore numquam pariatur
                        recusandae porro est repellat dolore asperiores."
                      </p>
                    </div>
                    {/* Desktop */}

                    <div className="carou-text col-lg-6 ps-4">
                      <p className="lead text-muted">
                        "Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Odit dicta provident tempore numquam pariatur
                        recusandae porro est repellat dolore asperiores."
                      </p>
                      <h1>Theophilus Sunday</h1>
                      <p>Lagos, Nigeria</p>
                    </div>
                  </div>
                </div>
              </div>

              <button
                class="carousel-control-prev "
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon previousBtn"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next "
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon nextBtn"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>

        {/* FAQS */}
        <div className="about-faqs container">
          <div className="container about-content">
            <h1 className="">
              Frequentl<span>y Asked</span> Questions
            </h1>

            <div class="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    I'd love to enroll. How can I register?
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    <p className="text-muted">
                      Go to the <strong>Programs</strong> section, select a
                      course and hit the enroll button. Complete the fields in
                      the form and submit to register. An email would be sent to
                      you containing details about the program - program
                      schedule, curriculum and payment.
                    </p>
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    I have no technical background. How do I know that this is
                    right for me?
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    <p className="text-muted">
                      If there was an industry that had no bias about gender,
                      age or race, it is tech. You do not need a computer
                      science degree or to have been an A1 student in Math to be
                      able to have your share in the industry. There is no
                      'late-comer' either. As long as you have the drive,
                      commitment and the genuine desire to change the world by
                      creating solutions to real-world problems, then yes, the
                      program is right for you!
                    </p>
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    Do I get an internship after I complete a program with you?
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    <p className="text-muted">
                      No. We do not provide internship opportunites at the
                      moment. However, we offer career support and mentorship to
                      our students and assist our top students in landing
                      internship or full-time roles at tech organizations. Our
                      top students comprises of those who were exceptional
                      during the program by completing tasks and projects given
                      to them.
                    </p>
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingFour">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFour"
                    aria-expanded="false"
                    aria-controls="flush-collapseFour"
                  >
                    What do I need for the program?
                  </button>
                </h2>
                <div
                  id="flush-collapseFour"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingFour"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    <p className="text-muted">
                      A working laptop with at least 6GB RAM. However most
                      importantly, you need commitment and consistency to
                      succeed in any of the programs.
                    </p>
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingFive">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFive"
                    aria-expanded="false"
                    aria-controls="flush-collapseFive"
                  >
                    What is the tuition fee for a program?
                  </button>
                </h2>
                <div
                  id="flush-collapseFive"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingFive"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    <p className="text-muted">
                      Fees are subject to a particular program type. Please go
                      to the <strong>Programs</strong> section and select a
                      program. The program fees are contained in each program
                      card.
                    </p>
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingSix">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseSix"
                    aria-expanded="false"
                    aria-controls="flush-collapseSix"
                  >
                    What are your payment plans available?
                  </button>
                </h2>
                <div
                  id="flush-collapseSix"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingSix"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    <p className="text-muted">
                      Upon outright purchases of any of our programs, we offer a
                      10% discount. However for installmental payments, we only
                      take payments in two tranches only. Upon registration, at
                      least 65% of the program fees must have been completed by
                      the student with the remaining 35% completed on or before
                      the fifth week into the program.
                    </p>
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingSeven">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseSeven"
                    aria-expanded="false"
                    aria-controls="flush-collapseSeven"
                  >
                    Where do I get info about when a program starts?
                  </button>
                </h2>
                <div
                  id="flush-collapseSeven"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingSeven"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    <p className="text-muted">
                      Stay up to date with us by following us on our social
                      media platforms. Go to the <strong>Contact</strong>{" "}
                      section to see the various mediums you could contact us
                      through.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default About;
