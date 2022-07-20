import React from "react";
import "./AboutComponent.style.scss";
import { Link } from "react-router-dom";
import BackComponent from "../../Components/BackComponent/BackComponent";

const AboutPageComponent = () => {
  return (
    <main>
      <div className="row about  mb">
        <h2 className="mb ct">About Zuma Express Auto</h2>
        <p className="mt">
          At Zuma Express Autos, our goal is to assist buyers in finding the
          ideal cars with an affordable prices. There are a lot of decisions to
          make in buying a superior and durable cars, and our experienced team
          can ask the questions and provide the information needed to make the
          purchase process stress-free. In addition, by working with our team,
          buyers can save money and time. Call us today, or get in touch online
          to start your home buying experience.
        </p>
      </div>
      <div className="why row">
        <h2>why choose us</h2>
        <p>
          We make shopping easier by matching your dream car with your budget
          and delivering it to your home.
        </p>
      </div>
    </main>
  );
};

export default AboutPageComponent;
