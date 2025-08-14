import React from "react";
import { useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useNavigate } from "react-router-dom";
import { useTrait } from "../context/Traitcontext";
import ConvertPopup from "../components/convertXpToNectar";
import avatar from "../assets/icons/Ellipse.png";
import HiveScribeLogo from "../assets/HIVESCRIBE.png";
import nectarIcon from "../assets/icons/nectarIcon.png";

const shortenAddress = (address) => {
  if (!address) return "";
  const str = address;
  return `${str.slice(0, 4)}******${str.slice(-6)}`;
};

const capitalize = (s) => s?.charAt(0).toUpperCase() + s.slice(1);

const ProfilePage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);
  const { publicKey } = useWallet();
  const navigate = useNavigate();
  const { traits } = useTrait();

  const level = Math.min(Math.floor((traits.playerXP / 30) * 100), 100);

  const completedMissions = traits.completedMissions?.length || 0;
  const unlockedTraits = traits.unlockedTraits?.length || 0;
  const playerXP = traits.playerXP;
  const ConvertXptoNectar = () => {};
  return (
    <div className="profile-container">
      <img className="logo" src={HiveScribeLogo} alt="HiveScribe" />
      <button className="nav-button" onClick={() => navigate("/dashboard")}>
        🏠 Home
      </button>

      <div className="card">
        <img src={avatar} alt="avatar" className="avatar" />
        <div className="info">
          <p className="address">
            {publicKey ? shortenAddress(publicKey.toBase58()) : "Not Connected"}
          </p>
          <div className="status">
            <span className="badge">🪜{capitalize(traits.stage)}</span>
            <span>
              <img src={nectarIcon} alt="nectar" className="nectar-icon" />
              Nectar: {traits.nectar}
            </span>
          </div>
        </div>
      </div>
      <div className="nav-buttons-wrapper">
        <button className="nav-button" onClick={openPopup}>
          ⚡Xp toNecar
        </button>

        <button className="nav-button" onClick={() => navigate("")}>
          🏭 MintHoney
        </button>
        <button className="nav-button" onClick={() => navigate("/leaderboard")}>
          🏆 Leaderboad
        </button>
      </div>
      <div className="progress-section">
        <label>Level Progress</label>
        <div className="bar">
          <div className="bar-fill" style={{ width: `${level}%` }} />
        </div>
        <span className="percent">{level}%</span>
      </div>

      <div className="profile-summary">
        <h3>
          Profile: <span style={{ color: "#4e3927" }}>BeeBlaster123</span>
        </h3>
        <p>⚡XP: {playerXP}</p>

        <p>
          <img src={nectarIcon} alt="nectar" className="nectar-icon" />
          Nectar: {traits.nectar}
        </p>
        <p> 🪜 Stage: {capitalize(traits.stage)}</p>
        <p> 🏅 Missions: {completedMissions}/4 completed</p>
        <p> ⭐ Traits Unlocked: {unlockedTraits}</p>

        <button
          className="view-missions-button"
          onClick={() => navigate("/missions")}
        >
          → View Missions & Traits
        </button>
        <ConvertPopup show={showPopup} onClose={closePopup}>
          <h2>Balances</h2>
          <h4>
            {" "}
            <img src={nectarIcon} alt="nectar" className="nectar-icon" />{" "}
            Nectar: {traits.nectar}
          </h4>
          <h4>⚡ XP: {playerXP}</h4>
          <input
            type="text"
            placeholder=" input xp amount to convert "
          ></input>{" "}
          <button className="nav-button" onClick={() => ConvertXptoNectar()}>
            Convert
          </button>
        </ConvertPopup>
      </div>
    </div>
  );
};

export default ProfilePage;
