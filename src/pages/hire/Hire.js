import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import "./Hire.css";
import "./HireMediaQueries.css";
import tutor from "../../images/lanre.jpg";

const Hire = () => {
  return (
    <>
      <section className="hire-section">
        <Navbar />
        <div className="hire-section-hero container">
          <div className="hire-section-hero-text">
            <h1 className="display-4 inner-text fw-bold">
              Grow your business/brand!
            </h1>

            <p className="lead">
              Develop job-ready digital skills for as few as 15 hours per week -
              physically and online where you can
            </p>
          </div>
        </div>

        <div className="hire-after-hero">
          <div className=" hire-after-hero-content container-lg">
            <h1 className="">
              Hire a prof<span>essional for</span> your brand!
            </h1>
            <p className="">
              Looking to up-scale your business, organization or brand by
              engaging professionals in tech, Tech Accent Creatives is the best
              option for you. As is our culture to always impart the right
              knowledge and skills at our school, it is only normal that we
              engage only the best qualified hands for you. If you are looking
              for a product designer, software engineer, data analyst, data
              scientist, graphics designer, digital marketer etc, fill the form
              below to get started.
            </p>

            <div className="hire-body">
              <div className="hire-right">
                <form>
                  <select name="" id="">
                    <option value="">Mr.</option>
                    <option value="">Mrs.</option>
                    <option value="">Miss</option>
                  </select>

                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Full Names*"
                    required
                  />

                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="Email*"
                    required
                  />

                  <input
                    type="tel"
                    name=""
                    id=""
                    placeholder="Phone"
                    required
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Organization"
                    required
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Industry"
                    required
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Role"
                    required
                  />

                  <br />

                  <hr />

                  <br />

                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Project Title*"
                    required
                  />

                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Project Scope*"
                    required
                  />

                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Deadline*"
                    required
                  />

                  <textarea
                    name=""
                    id=""
                    cols="40"
                    rows="3"
                    placeholder="Project Specifications*"
                    required
                  ></textarea>

                  <button
                    type="submit"
                    className="btn btn-lg px-5 mt-4 request-techie"
                  >
                    Request Quote
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </section>
    </>
  );
};

export default Hire;
