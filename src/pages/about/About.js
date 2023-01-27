import React, { useEffect } from "react";
import Navbar from "../navbar/Navbar";
import "./About.css";
import "./AMediaQueries.css";
import student from "../../images/Web_3.webp";
import group from "../../images/group-cert.jpg";
import classroom from "../../images/class-room.jpg";
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
          <div className="brief brief-one">
            <div className="brief-text">
              <h3 className="brief-text-head">
                A Lit<span>tle Abo</span>ut Us
              </h3>

              <p>
                <span className="first-letter">W</span>e are a community of tech
                enthusiasts determined to change the world by creating and
                proferring solutions to real-world problems. We understand the
                complexities surrounding tech in its entirety and as such, we
                have engaged only qualified and passionate minds to help budding
                technology enthusiasts understand these complexities by
                demystifying them to the most basic level to take you from a
                complete novice level to mastery.
              </p>
            </div>

            <div className="brief-image">
              <img
                src={student}
                alt="student"
                className="actual-image2"
                width="60%"
              />
            </div>
          </div>

          <div className="brief brief-two">
            <div className="brief-image brief-image-group">
              <img
                src={group}
                alt="group-with-certificates"
                className="actual-image2 "
              />
            </div>
            <div className="brief-text">
              <h3 className="brief-text-head">
                Ou<span>r Cre</span>ed
              </h3>

              <p>
                <span className="first-letter">O</span>ur work at Tech Accent
                transcends just learning and acquiring a skill. We are even more
                passionate about helping you learn how to ‘speak’ tech fluently.
                This means understanding each concept to its core and being able
                to use them in today's industry standard. We have made it our
                sole priority to help you accelerate your dream and desire to
                become a world-class software developer or designer, whether or
                not you have prior knowledge or experience. At the end of any of
                our programs, we assure you that you would have been job-ready.
              </p>
            </div>
          </div>

          <div className="brief brief-three">
            <div className="brief-text">
              <h3 className="brief-text-head">
                Condu<span>cive Lea</span>rning
              </h3>

              <p>
                <span className="first-letter">W</span>ith our state-of-the-art
                facility and conducive learning environment, learning a skill
                just got easier! We know that for our creative genius to come
                out, our environment plays a significant role and this is why at
                Tech Accent, we are concerned with ensuring that the ambience
                and aura that you need to have the right focus and learning
                experience is guaranteed so that you could direct your energy
                and creativity to the right areas.
              </p>
            </div>

            <div className="brief-image">
              <img
                src={classroom}
                alt="classroom"
                className="actual-image2 brief-image-class"
              />
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="about-end mt-5">
          <div className="container">
            <div className="container about-content">
              <h1 className="">
                Test<span>imon</span>ials
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
                      <img src={rita} class="d-block" alt="student-1" />
                    </div>

                    {/* Mobile */}
                    <div className="mobile-carou-text col-12 text-center">
                      <h3>Rita Chiaha</h3>
                      <p>
                        (JavaScript Full-stack developer) <br />
                        Lagos, Nigeria
                      </p>
                      <p>
                        "At first, I wasn't confident in myself that I could fit
                        into the tech world because I had no prior experience or
                        knowledge about coding. While looking for the perfect
                        school to help me do that, I stumbled upon Tech Accent
                        and today, the rest is history. Tech Accent did not only
                        boost my confidence but also helped me master the skills
                        I needed in my career as a full-stack developer."
                      </p>
                    </div>

                    {/* Desktop */}
                    <div className="carou-text col-lg-6 col-12">
                      <p>
                        "At first, I wasn't confident in myself that I could fit
                        into the tech world because I had no prior experience or
                        knowledge about coding. While looking for a perfect
                        school to help me do that, I stumbled upon TECH ACCENT
                        and today, the rest is history. Tech Accent did not only
                        boost my confidence but also helped me master the skills
                        I needed in my career as a full-stack developer."
                      </p>
                      <h4>Rita Chiaha</h4>
                      <p>Lagos, Nigeria</p>
                    </div>
                  </div>
                </div>

                {/* Nasiru */}
                <div class="carousel-item carou-item-1">
                  <div className="row nasiru">
                    <div className="carou-text col-lg-6 ps-4">
                      <p>
                        "Trying to learn JavaScript and web development on my
                        own was a real struggle. I had attempted it a number of
                        times over the past couple of months but always found
                        myself feeling overwhelmed by the sheer amount of
                        information out there. Thank God I found Tech Accent.
                        Instead of drowning in theory, Tech Accent gets you
                        straight into practicing with exercises every step of
                        the way. It was worth every penny!"
                      </p>
                      <h4>Nasiru Aimanosi</h4>
                      <p>Lagos, Nigeria</p>
                    </div>

                    {/* Mobile */}
                    <div className="mobile-carou-text col-12 text-center">
                      <h3>Nasiru Aimanosi</h3>
                      <p>
                        (JavaScript Full-stack developer) <br />
                        Lagos, Nigeria
                      </p>
                      <p>
                        "Trying to learn JavaScript and web development on my
                        own was a real struggle. I had attempted it a number of
                        times over the past couple of months but always found
                        myself feeling overwhelmed by the sheer amount of
                        information out there. Thank God I found Tech Accent.
                        Instead of drowning in theory, Tech Accent gets you
                        straight into practicing with exercises every step of
                        the way. It was worth every penny!"
                      </p>
                    </div>

                    <div className="col-lg-6 left-image nas">
                      <img src={nas} class="d-block" alt="..." />
                    </div>
                  </div>
                </div>

                {/* Chuks */}
                <div class="carousel-item carou-item-1">
                  <div className="row">
                    <div className="col-lg-6 left-image chuks">
                      <img src={chuks} class="d-block" alt="..." />
                    </div>
                    {/* Mobile */}
                    <div className="mobile-carou-text col-12 text-center">
                      <h3>Chuks Awa</h3>
                      <p>
                        (Product Designer) <br />
                        Dubai, UAE
                      </p>
                      <p>
                        "Tech Accent employs an interactive approach for
                        learning to keep you engaged and motivated, making the
                        learning experience, physically or virtually, much more
                        enjoyable than traditional lecture-based classes. This
                        applies to you especially if you are the hands-on, 'get
                        straight into it' kind of person."
                      </p>
                    </div>

                    {/* Desktop */}
                    <div className="carou-text col-lg-6">
                      <p>
                        "Tech Accent employs an interactive approach for
                        learning to keep you engaged and motivated, making the
                        learning experience, physically or virtually, much more
                        enjoyable than traditional lecture-based classes. This
                        applies to you especially if you are the hands-on, 'get
                        straight into it' kind of person."
                      </p>
                      <h4>Chuks Awa</h4>
                      <p>Dubai, UAE</p>
                    </div>
                  </div>
                </div>

                {/* Tewogbade */}
                <div class="carousel-item carou-item-1">
                  <div className="row tewo">
                    <div className="carou-text col-lg-6 ps-4">
                      <p>
                        "It's hard to know where to begin when there's so much
                        unstructured information available. But luckily I ran
                        into Tech Accent Academy. It is an online/on-site
                        platform that provides hands-on learning experiences in
                        JavaScript full stack web development."
                      </p>
                      <h4>Tewogbade Tella</h4>
                      <p>Lagos, Nigeria</p>
                    </div>
                    {/* Mobile */}
                    <div className="mobile-carou-text col-12 text-center">
                      <h3>Tewogbade Tella</h3>
                      <p>
                        (JavaScript Full-stack developer) <br /> Lagos, Nigeria
                      </p>
                      <p>
                        "It's hard to know where to begin when there's so much
                        unstructured information available. But luckily I ran
                        into Tech Accent Academy. It is an online/on-site
                        platform that provides hands-on learning experiences in
                        JavaScript full stack web development."
                      </p>
                    </div>

                    <div className="col-lg-6 left-image tewogbade">
                      <img src={tewogbade} class="d-block" alt="..." />
                    </div>
                  </div>
                </div>

                {/* Theophilus */}
                {/* <div class="carousel-item carou-item-1">
                  <div className="row">
                    <div className="col-lg-6 left-image sunday">
                      <img
                        src={theophilus}
                        class="d-block theophilus"
                        alt="..."
                        width="60.6%"
                      />
                    </div> */}

                {/* Mobile */}
                {/* <div className="mobile-carou-text col-12 text-center">
                      <h1>Theophilus Sunday</h1>
                      <p>Lagos, Nigeria</p>
                      <p className="lead text-muted">
                        "Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Odit dicta provident tempore numquam pariatur
                        recusandae porro est repellat dolore asperiores."
                      </p>
                    </div> */}

                {/* Desktop */}
                {/* <div className="carou-text col-lg-6 ps-4">
                      <p className="lead text-muted">
                        "Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Odit dicta provident tempore numquam pariatur
                        recusandae porro est repellat dolore asperiores."
                      </p>
                      <h1>Theophilus Sunday</h1>
                      <p>Lagos, Nigeria</p>
                    </div>
                  </div>
                </div> */}
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
          <div className="about-content">
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
                    <p>
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
                    <p>
                      If there was an industry that had no bias about gender,
                      age, qualification or race, it is tech. You do not need a
                      computer science degree or to have been an A1 student in
                      Math to be able to have your share in the industry. There
                      is no 'late-comer' either. As long as you have the drive,
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
                    <p>
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
                    <p>
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
                    <p>
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
                    <p>
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
                    <p>
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
