import React from "react";
import { useNavigate } from "react-router-dom";
export default function Leaderboard() {
  const navigate = useNavigate();
  return (
    <div className="floating-wrapper">
      <button className="nav-button" onClick={() => navigate("/profilepage")}>
        ← Back to Profile
      </button>

      <h2 className="section-title">Top Scorers</h2>
      <h2 className="section-title">Top Earners</h2>
    </div>
  );
}
