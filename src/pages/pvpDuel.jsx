import React from "react";
import { useNavigate } from "react-router-dom";
export default function PvPduel() {
  const navigate = useNavigate();
  return (
    <div className="pvp-container">
      <button className="nav-button" onClick={() => navigate("/dashboard")}>
        🏠 Home
      </button>
      <div>
        <h2 className="online-title">Available Duels</h2>

        <p>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            Rock Paper Scissors
          </a>
        </p>
        <p>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            Chess
          </a>
        </p>
        <p>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            Ludo
          </a>
        </p>
      </div>
      <div className="floating-wrapper">
        <h2 className="online-title"> Players Online </h2>

        <em>
          Not enough USERS Data to construct this atm. This is a prototype game.
        </em>
      </div>
    </div>
  );
}
