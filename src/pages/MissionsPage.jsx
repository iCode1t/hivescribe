import React from "react";
import { useTrait } from "../context/Traitcontext";
import { useNavigate } from "react-router-dom";
import nectarIcon from "../assets/icons/nectarIcon.png";

const allMissions = [
  {
    id: "hatched",
    name: "Hatched",
    description: "Answered your first question correctly.",
    nectar: 1,
  },
  {
    id: "hotStreak",
    name: "Hot Streak",
    description: "Got 5 correct answers in a row.",
    nectar: 1,
  },
  {
    id: "loyalBee",
    name: "Loyal Bee",
    description: "Returned and answered a question correctly.",
    nectar: 1,
  },
  {
    id: "trueBee",
    name: "True Bee",
    description: "Completed all missions.",
    nectar: 1,
  },
];

const MissionsPage = () => {
  const { traits } = useTrait();
  const navigate = useNavigate();
  const completed = traits.completedMissions || [];

  return (
    <div className="missions-page">
      <button className="nav-button" onClick={() => navigate("/profilepage")}>
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
              <p className="xp-reward">
                <img
                  src={nectarIcon}
                  alt="nectatIcon"
                  className="nectar-icon"
                />{" "}
                {mission.nectar} Nectar{" "}
              </p>
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
