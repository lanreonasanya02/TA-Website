import React, { useEffect } from "react";
import Navbar from "../navbar/Navbar";
import "./About.css";
import "./AMediaQueries.css";
import student from "../../images/Web_3.webp";
import group from "../../images/group-cert.jpg";
import classroom from "../../images/class-room.jpg";
import Footer from "../footer/Footer";
import Testimonials from "./Testimonials";
import FAQS from "./FAQS";
import ScrollToTop from "../scroll-to-top/ScrollToTop";

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
        <div className="">
          <div className="mobile-about-heading ">
            <h1 className="brief-text-head text-center">Why Choose Us?</h1>
            <p>
              By 2030, there would be a huge deficit of tech talent globally.
              Whether you are looking to change your career path or increase
              your earning, Tech Accent is a tech school designed to accelerate
              your career in tech. We adopt a do-it-yourself approach giving
              students the opportunity of enjoying every experience.
            </p>
          </div>
          <div className="brief brief-one container-lg">
            <div className="brief-text">
              <h5 className="brief-text-head d-lg-none">
                A Lit<span>tle Abo</span>ut Us
              </h5>

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

          <div className="brief-two ">
            <div className="brief container-lg">
              <div className="brief-image brief-image-group">
                <img
                  src={group}
                  alt="group-with-certificates"
                  className="actual-image2 "
                />
              </div>
              <div className="brief-text">
                <h5 className="brief-text-head d-lg-none">
                  Ou<span>r Cre</span>ed
                </h5>

                <p>
                  <span className="first-letter">O</span>ur work at Tech Accent
                  transcends just learning and acquiring a skill. We are even
                  more passionate about helping you learn how to ‘speak’ tech
                  fluently. This means understanding each concept to its core
                  and being able to use them in today's industry standard. We
                  have made it our sole priority to help you accelerate your
                  dream and desire to become a world-class software developer or
                  designer, whether or not you have prior knowledge or
                  experience. At the end of any of our programs, we assure you
                  that you would have been job-ready.
                </p>
              </div>
            </div>
          </div>

          <div className="brief brief-three container-lg">
            <div className="brief-text ">
              <h5 className="brief-text-head d-lg-none">
                Condu<span>cive Lea</span>rning
              </h5>

              <p>
                <span className="first-letter">W</span>ith our state-of-the-art
                facility and conducive learning environment, learning a skill
                just got easier! We know that for our creative genius to evolve,
                our environment plays a significant role and this is why at Tech
                Accent, we are concerned with ensuring that the ambience and
                aura that you need to have the right focus and learning
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

        <FAQS />
        <Testimonials />
      </div>
      <Footer />
      <ScrollToTop />
    </section>
  );
};

export default About;
