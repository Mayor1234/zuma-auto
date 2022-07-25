import React from "react";
import "./AboutComponent.style.scss";

const AboutPageComponent = () => {
  return (
    <main className="row">
      <div className="row about  mb">
        <div className="about-text">
          <h2>About Zuma Express Auto</h2>
          <p className="mt mb3">
            Our goal is to assist buyers in finding their ideal cars with an
            affordable prices. There are lot of decisions to make in buying a
            superior and durable cars, and our experienced team can ask the
            questions and provide the information needed to make the purchase
            process stress-free. In addition, by working with our team, buyers
            can save money and time. Call us today, or get in touch online to
            start your home buying experience.
          </p>
          <div className="row">
            <h3 className="mb why">Why Choose Us</h3>
            <ul>
              <li>
                <p>
                  We make shopping easier by matching your dream car with your
                  budget.
                </p>
              </li>
              <li>Offering competitive pricing always.</li>
              <li>
                Robust collection of outstanding brand new, pre-used and fairly
                imported vehicles.
              </li>
            </ul>
          </div>
        </div>
        <div className="team-img mb">
          <img
            src={process.env.PUBLIC_URL + `/images/team.jpeg`}
            alt="team_image"
          />
        </div>
      </div>
    </main>
  );
};

export default AboutPageComponent;
