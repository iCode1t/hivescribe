// MissionsPage.js

import React from "react";
import { useTrait } from "../context/Traitcontext";
import { useNavigate } from "react-router-dom";

const allMissions = [
  {
    id: "hatched",
    name: "Hatched",
    description: "Answer your first question correctly.",
    xp: 4,
  },
  {
    id: "hotStreak",
    name: "Hot Streak",
    description: "Get 5 correct answers in a row.",
    xp: 6,
  },
  {
    id: "loyalBee",
    name: "Loyal Bee",
    description: "Return the next day and answer a question correctly.",
    xp: 5,
  },
  {
    id: "trueBee",
    name: "True Bee",
    description: "Complete all 3 previous missions.",
    xp: 5,
  },
];

const MissionsPage = () => {
  const { traits } = useTrait();
  const navigate = useNavigate();
  const completed = traits.completedMissions || [];

  return (
    <div className="missions-page">
      <button className="back-button" onClick={() => navigate("/profilepage")}>
        ← Back to Profile
      </button>
      <h2 className="missions-title"> Your Missions & Traits</h2>

      <div className="mission-list">
        {allMissions.map((mission) => {
          const achieved = completed.includes(mission.id);
          return (
            <div
              key={mission.id}
              className={`mission-card ${achieved ? "completed" : ""}`}
            >
              <h3>{mission.name}</h3>
              <p>{mission.description}</p>
              <p className="xp-reward">🎁 {mission.xp} Nectar XP</p>
              {achieved ? (
                <span className="badge-complete">✅ Completed</span>
              ) : (
                <span className="badge-incomplete">🔒 Locked</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MissionsPage;
