import React from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import "./SalesTeamPreview.style.scss";

const SalesTeamPreview = ({ name, position, imgTeam }) => {
  return (
    <div className="team-preview">
      <div className="team-wrap">
        <div className="preview-team">
          <img
            className="team-img"
            src={process.env.PUBLIC_URL + imgTeam}
            alt="Sales team"
          ></img>
        </div>

        <div className="team-footer">
          <p>{name}</p>
          <span>{position}</span>
          <div target="_blank" className="social-icons-container">
            <a target="_blank" href="https://www.facebook.com/realer231">
              <FaFacebookSquare className="social-icon" />
            </a>

            <a target="_blank" href="https://www.twitter.com/realer231">
              <FaTwitterSquare className="social-icon" />
            </a>

            <a target="_blank" href="https://www.instagram.com/realer231">
              <FaInstagramSquare className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesTeamPreview;
