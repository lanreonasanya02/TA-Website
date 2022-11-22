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
          <div className=" hire-after-hero-content container">
            <h1 className="">
              Hire a prof<span>essional for</span> your brand!
            </h1>
            <p className="">
              Choose from our range of programmes to begin your tech career.
            </p>

            <div className="hire-body">
              <div className="hire-left">
                <figure>
                  <img src={tutor} alt="lanre" />
                  <figcaption className="lead">Lanre Adeolu</figcaption>
                  <figcaption className="text-muted">
                    JS Coach & Developer at{" "}
                    <span className="fst-italic">Tech accent</span>
                  </figcaption>
                </figure>
              </div>

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

                  <hr />

                  {/* 
                  <select name="" id="">
                    <option value=""></option>
                  </select> */}
                  <textarea
                    name=""
                    id=""
                    cols="40"
                    rows="3"
                    placeholder="Message*"
                    required
                  ></textarea>

                  <button
                    type="submit"
                    className="btn btn-lg px-5 mt-4 request-techie"
                  >
                    Request Techie!
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
