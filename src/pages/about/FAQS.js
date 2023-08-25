import React from "react";
import "./About.css";
import "./AMediaQueries.css";

const FAQS = () => {
  return (
    <div className="about-faqs ">
      <div className="about-content container-lg">
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
                  Go to the <strong>Programs</strong> section, select a course
                  and hit the enroll button. Complete the fields in the form and
                  submit to register. An email would be sent to you containing
                  details about the program - program schedule, curriculum and
                  payment.
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
                I have no technical background. How do I know that this is right
                for me?
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
                  If there was an industry that had no bias about gender, age,
                  qualification or race, it is tech. You do not need a computer
                  science degree or to have been an A1 student in Math to be
                  able to have your share in the industry. There is no
                  'late-comer' either. As long as you have the drive, commitment
                  and the genuine desire to change the world by creating
                  solutions to real-world problems, then yes, the program is
                  right for you!
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
                  No. We do not provide internship opportunites at the moment.
                  However, we offer career support and mentorship to our
                  students and assist our top students in landing internship or
                  full-time roles at tech organizations. Our top students
                  comprises of those who were exceptional during the program by
                  completing tasks and projects given to them.
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
                  importantly, you need commitment and consistency to succeed in
                  any of the programs.
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
                  Fees are subject to a particular program type. Please go to
                  the <strong>Programs</strong> section and select a program.
                  The program fees are contained in each program card.
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
                  Upon outright purchases of any of our programs, we offer a 10%
                  discount. However for installmental payments, we only take
                  payments in two tranches only. Upon registration, at least 65%
                  of the program fees must have been completed by the student
                  with the remaining 35% completed on or before the fifth week
                  into the program.
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
                  Stay up to date with us by following us on our social media
                  platforms. Go to the <strong>Contact</strong> section to see
                  the various mediums you could contact us through.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQS;
