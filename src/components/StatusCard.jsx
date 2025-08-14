import React from "react";

const StatusCard = ({ label, icon, playerXP, locked }) => {
  return (
    <div className="status-card">
      <div className="status-icon">
        <img src={icon} alt={label} />
      </div>
      <div className="status-info">
        <span className="status-label">{label}</span>
        <div className="total-xp-placeholder">
          <span>{playerXP}</span>
        </div>
      </div>
      <div className="lock-icon">{locked ? "🔒" : "🔓"}</div>
    </div>
  );
};

export default StatusCard;
