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
                <span className="first-letter">L</span>orem ipsum dolor sit amet
                consectetur adipisicing elit. Quos fuga omnis soluta aut
                necessitatibus atque. Voluptatem expedita fugiat ipsum rem
                numquam atque molestias, officiis consequatur, omnis et iste
                recusandae amet labore error officia quaerat ea nostrum? Minus
                aperiam et nesciunt doloribus hic ea temporibus, incidunt
                voluptatem vitae reiciendis, commodi quia?
              </p>

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
                reprehenderit incidunt cum aspernatur! Assumenda corrupti
                temporibus ab unde nulla est ipsa autem officia quae ex quaerat,
                commodi laborum eius laudantium, reprehenderit expedita,
                explicabo ea esse minus illo perferendis aliquam voluptatibus.
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
                      <p className="lead text-muted">
                        "Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Odit dicta provident tempore numquam pariatur
                        recusandae porro est repellat dolore asperiores."
                      </p>
                    </div>

                    {/* Desktop */}
                    <div className="carou-text col-lg-6 col-12">
                      <p className="lead text-muted">
                        "Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Odit dicta provident tempore numquam pariatur
                        recusandae porro est repellat dolore asperiores."
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
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Qui velit, ut incidunt facere obcaecati libero ipsam
                      aspernatur nesciunt nostrum, voluptate laborum temporibus
                      et blanditiis commodi, porro dolorem assumenda id?
                      Deleniti?
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
                    Do I get an internship after I complete a programme with
                    you?
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
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Qui velit, ut incidunt facere obcaecati libero ipsam
                      aspernatur nesciunt nostrum, voluptate laborum temporibus
                      et blanditiis commodi, porro dolorem assumenda id?
                      Deleniti?
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
                    Where do I make payment to register for a programme?
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
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Qui velit, ut incidunt facere obcaecati libero ipsam
                      aspernatur nesciunt nostrum, voluptate laborum temporibus
                      et blanditiis commodi, porro dolorem assumenda id?
                      Deleniti?
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
                    What do I need for the programme?
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
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Qui velit, ut incidunt facere obcaecati libero ipsam
                      aspernatur nesciunt nostrum, voluptate laborum temporibus
                      et blanditiis commodi, porro dolorem assumenda id?
                      Deleniti?
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
                    I have no prior knowledge of tech. Do you think I can
                    succeed here?
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
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Qui velit, ut incidunt facere obcaecati libero ipsam
                      aspernatur nesciunt nostrum, voluptate laborum temporibus
                      et blanditiis commodi, porro dolorem assumenda id?
                      Deleniti?
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
                    Do I get an internship after I complete a programme with
                    you?
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
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Qui velit, ut incidunt facere obcaecati libero ipsam
                      aspernatur nesciunt nostrum, voluptate laborum temporibus
                      et blanditiis commodi, porro dolorem assumenda id?
                      Deleniti?
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
