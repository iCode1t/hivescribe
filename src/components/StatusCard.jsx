import React from "react";

const StatusCard = ({ label, icon, honeyIcon, NectarXp, locked }) => {
  return (
    <div className="status-card">
      <div className="status-icon">
        <img src={icon} alt={label} />
      </div>
      <div className="status-info">
        <span className="status-label">{label}</span>
        <div className="honey">
          <img src={honeyIcon} alt="Honey" className="honey-icon" />
          <span>{NectarXp}</span>
        </div>
      </div>
      <div className="lock-icon">{locked ? "🔒" : "🔓"}</div>
    </div>
  );
};

export default StatusCard;
