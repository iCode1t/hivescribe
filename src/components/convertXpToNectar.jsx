import React from "react";

const ConvertPopup = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="conversion-overlay" onClick={onClose}>
      {" "}
      <div className="floating-wrapper" onClick={(e) => e.stopPropagation()}>
        {" "}
        {children}
        <button className="popup-close-btn" onClick={onClose}>
          Done
        </button>
      </div>
    </div>
  );
};

export default ConvertPopup;
