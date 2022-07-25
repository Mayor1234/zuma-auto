import React from "react";
import "./HeroComponent.style.scss";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { useNavigate } from "react-router-dom";

const HeroComponent = () => {
  let navigate = useNavigate();
  const handleClick = (el) => {
    navigate("/products");
  };

  return (
    <header
      style={{
        backgroundImage: `url('${process.env.PUBLIC_URL}/images/banner.jpg')`,
      }}
    >
      <div className="hero row">
        <div className="header-text">
          <span>Find your dream car</span>
          <h1>zuma express auto</h1>
          <ButtonComponent
            solid="btn"
            handleClick={handleClick}
            text="View Our Inventory"
          />
        </div>
      </div>
    </header>
  );
};
export default HeroComponent;
