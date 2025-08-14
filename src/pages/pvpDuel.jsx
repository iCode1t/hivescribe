import React from "react";
import { useNavigate } from "react-router-dom";
export default function PvPduel() {
  const navigate = useNavigate();
  return (
    <div className="pvp-container">
      <button className="nav-button" onClick={() => navigate("/dashboard")}>
        🏠 Home
      </button>
      <div className="floating-wrapper">
        <h2 className="online-title">Available Players</h2>
        <p>
          ghju2563***hjdky{" "}
          <button className="challenge-button">challenge</button>
        </p>
      </div>
    </div>
  );
}
