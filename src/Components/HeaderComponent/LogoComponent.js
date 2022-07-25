import React from "react";
import { Link } from "react-router-dom";
import "./LogoComponent.style.scss";

const LogoComponent = () => {
  return (
    <div>
      <div className="logo">
        <Link to="/">
          <img
            src={process.env.PUBLIC_URL + `/images/zumalogo.webp`}
            alt="team_image"
          />
        </Link>
      </div>
    </div>
  );
};

export default LogoComponent;
