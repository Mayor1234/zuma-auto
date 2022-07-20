import React, { useState } from "react";
import "./SalesTeam.style.scss";
import SalesTeamPreview from "./SalesTeamPreview";

const SalesTeamComponent = () => {
  const [teams, setTeams] = useState([
    {
      name: "Saviour Thompson",
      position: "Director",
      imgTeam: "/images/teams/saviour.jpg",
      id: 1,
    },
    {
      name: "Bright Thompson",
      position: " Sales Manager",
      imgTeam: "/images/teams/bright.jpg",
      id: 2,
    },
    {
      name: "Nike Adedoja",
      position: "Marketing",
      imgTeam: "/images/teams/nike.jpg",
      id: 3,
    },
    {
      name: "Gift Thompson",
      position: "Secretary",
      imgTeam: "/images/teams/gift.jpg",
      id: 4,
    },
  ]);

  return (
    <div className="team-section">
      <h2>our sales team</h2>
      <div className="card">
        {teams.map(({ id, ...otherTeamsProps }) => (
          <SalesTeamPreview className="team" key={id} {...otherTeamsProps} />
        ))}
      </div>
    </div>
  );
};

export default SalesTeamComponent;
