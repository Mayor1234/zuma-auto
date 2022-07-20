import React from "react";
import "./BrandComponent.style.scss";

const BrandComponent = () => {
  return (
    <div>
      <div className="brand-heading">
        <h2>OUR BRANDS</h2>
        <p>We Autos Deals In</p>
        <span></span>
      </div>
      
      <div className="container">
        <div className="car">
          <img src={process.env.PUBLIC_URL + `/images/lexuslogo.jpeg`} />
        </div>

        <div className="car">
          <img src={process.env.PUBLIC_URL + `/images/toyotalogo.jpeg`} />
        </div>

        <div className="car">
          <img src={process.env.PUBLIC_URL + `/images/benzlogo.jpeg`} />
        </div>

        <div className="car">
          <img src={process.env.PUBLIC_URL + `/images/hondalogo.jpeg`} />
        </div>

      </div>
    </div>
  );
};

export default BrandComponent;
