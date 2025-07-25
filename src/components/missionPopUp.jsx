import React from "react";

const MissionPopup = ({ onClose, passedMissions }) => {
  return (
    <div className="mission-popup">
      <div className="popup-content">
        <h3 className="popup-title">🎯 Mission Complete!</h3>

        {passedMissions.length > 0 ? (
          <>
            <p className="popup-message">
              You Just Completed A mission:
              {passedMissions.length > 1 ? "s" : ""}:
            </p>
            <ul className="popup-list">
              {passedMissions.map((mission, index) => (
                <li key={index} className="popup-item">
                  ✅ {mission}
                </li>
              ))}
            </ul>
          </>
        ) : null}

        <button className="close-popup-button" onClick={onClose}>
          Got it
        </button>
      </div>
    </div>
  );
};

export default MissionPopup;
