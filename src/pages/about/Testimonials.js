import React from "react";
import rita from "../../images/rita-nobg.png";
import tewogbade from "../../images/tewo-nobg.png";
import nas from "../../images/nas-nobg.png";
import chuks from "../../images/chuks-nobg.png";
import "./About.css";
import "./AMediaQueries.css";
import { BsFillStarFill, BsStarHalf } from "react-icons/bs";

const Testimonials = () => {
  return (
    <div className="about-end">
      <div className="container">
        <div className="about-content">
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
                    knowledge about coding. While looking for the perfect school
                    to help me do that, I stumbled upon Tech Accent and today,
                    the rest is history. Tech Accent did not only boost my
                    confidence but also helped me master the skills I needed in
                    my career as a full-stack developer."
                  </p>
                  <div className="rating-icons">
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsStarHalf />
                  </div>
                </div>

                {/* Desktop */}
                <div className="carou-text col-lg-6 col-12">
                  <p>
                    "At first, I wasn't confident in myself that I could fit
                    into the tech world because I had no prior experience or
                    knowledge about coding. While looking for a perfect school
                    to help me do that, I stumbled upon TECH ACCENT and today,
                    the rest is history. Tech Accent did not only boost my
                    confidence but also helped me master the skills I needed in
                    my career as a full-stack developer."
                  </p>
                  <div className="rating-icons">
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsStarHalf />
                  </div>
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
                    "Trying to learn JavaScript and web development on my own
                    was a real struggle. I had attempted it a number of times
                    over the past couple of months but always found myself
                    feeling overwhelmed by the sheer amount of information out
                    there. Thank God I found Tech Accent. Instead of drowning in
                    theory, Tech Accent gets you straight into practicing with
                    exercises every step of the way. It was worth every penny!"
                  </p>
                  <div className="rating-icons">
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                  </div>
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
                    "It's hard to know where to begin when there's so much
                    unstructured information available. But luckily I ran into
                    Tech Accent Academy. It is an online/on-site platform that
                    provides hands-on learning experiences in JavaScript full
                    stack web development."
                  </p>
                  <div className="rating-icons">
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                  </div>
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
                    "Tech Accent employs an interactive approach for learning to
                    keep you engaged and motivated, making the learning
                    experience, physically or virtually, much more enjoyable
                    than traditional lecture-based classes. I was able to learn
                    so much and in such a meaningful way, thanks to our
                    passionate tutor’s ability to simplify “complex” topics.
                    This applies to you especially if you are the hands-on, 'get
                    straight into it' kind of person."
                  </p>
                  <div className="rating-icons">
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsStarHalf />
                  </div>
                </div>

                {/* Desktop */}
                <div className="carou-text col-lg-6">
                  <p>
                    "Tech Accent employs an interactive approach for learning to
                    keep you engaged and motivated, making the learning
                    experience, physically or virtually, much more enjoyable
                    than traditional lecture-based classes. I was able to learn
                    so much and in such a meaningful way, thanks to our
                    passionate tutor’s ability to simplify “complex” topics.
                    This applies to you especially if you are the hands-on, 'get
                    straight into it' kind of person."
                  </p>
                  <div className="rating-icons">
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsStarHalf />
                  </div>
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
                    "Joining Tech accent was one of the best decisions I made in
                    2022. Before I joined the JavaScript full stack web dev
                    program, I was taking some online courses but I could barely
                    understand anything and I almost lost hope until I joined
                    Tech Accent. Overall, it was a thorough coding experience
                    involving both front end and back end technologies. I’ll
                    recommend!"
                  </p>
                  <div className="rating-icons">
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                  </div>
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
                    "Joining Tech accent was one of the best decisions I made in
                    2022. Before I joined the JavaScript full stack web dev
                    program, I was taking some online courses but I could barely
                    understand anything and I almost lost hope until I joined
                    Tech Accent. Overall, it was a thorough coding experience
                    involving both front end and back end technologies. I’ll
                    recommend!"
                  </p>

                  <div className="rating-icons">
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                  </div>
                </div>

                <div className="col-lg-6 left-image tewogbade">
                  <img src={tewogbade} class="d-block" alt="..." />
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
  );
};

export default Testimonials;
