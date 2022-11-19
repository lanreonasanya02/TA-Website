import React from "react";
import "./About.css";
import hands from "../../images/hands-on.jpg";
import pay from "../../images/pay.jpg";
import community from "../../images/community.jpg";
import support from "../../images/support.jpg";
import grad from "../../images/grad.jpg";
import mentorship from "../../images/mentorship.jpg";

const Skills = () => {
  return (
    <div>
      <div className="skills">
        {/* Skill 1 */}
        <div class="card border-0 text-center" style={{ width: "12rem" }}>
          <div className="card-image text-center">
            <img src={hands} class="" alt="..." width="30%" />
          </div>
          <div class="card-body mt-4">
            <p class="card-text text-center">Project-based classes</p>
          </div>
        </div>

        {/* Skill 2 */}
        <div class="card border-0" style={{ width: "12rem" }}>
          <div className="card-image text-center">
            <img src={support} class="" alt="..." width="30%" />
          </div>
          <div class="card-body mt-4">
            <p class="card-text text-center">24/7 Support</p>
          </div>
        </div>

        {/* Skill 3 */}
        <div class="card border-0" style={{ width: "12rem" }}>
          <div className="card-image text-center">
            <img src={mentorship} class="" alt="..." width="30%" />
          </div>
          <div class="card-body">
            <p class="card-text text-center">Mentorship</p>
          </div>
        </div>

        {/* Skill 4 */}
        <div class="card border-0" style={{ width: "12rem" }}>
          <div className="card-image text-center">
            <img src={community} class="" alt="..." width="30%" />
          </div>
          <div class="card-body mt-4">
            <p class="card-text text-center">Close-knit community</p>
          </div>
        </div>

        {/* Skill 5 */}
        <div class="card border-0" style={{ width: "12rem" }}>
          <div className="card-image text-center">
            <img src={pay} class="" alt="..." width="30%" />
          </div>
          <div class="card-body">
            <p class="card-text text-center">Flexible payment</p>
          </div>
        </div>

        {/* Skill 6 */}
        <div class="card border-0" style={{ width: "12rem" }}>
          <div className="card-image text-center">
            <img src={grad} class="" alt="..." width="30%" />
          </div>
          <div class="card-body">
            <p class="card-text text-center">Certification</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
