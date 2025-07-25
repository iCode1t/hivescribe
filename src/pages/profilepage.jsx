import React from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useNavigate } from "react-router-dom";
import { useTrait } from "../context/Traitcontext";

import avatar from "../assets/icons/Ellipse.png";
import HiveScribeLogo from "../assets/HIVESCRIBE.png";
import honeyjar from "../assets/icons/nectarAsXpIcon.png";

const shortenAddress = (address) => {
  if (!address) return "";
  const str = address;
  return `${str.slice(0, 4)}******${str.slice(-6)}`;
};

const capitalize = (s) => s?.charAt(0).toUpperCase() + s.slice(1);

const ProfilePage = () => {
  const { publicKey } = useWallet();
  const navigate = useNavigate();
  const { traits } = useTrait();

  const level = Math.min(Math.floor((traits.nectarXP / 50) * 100), 100);

  const completedMissions = traits.completedMissions?.length || 0;
  const unlockedTraits = traits.unlockedTraits?.length || 0;
  const showNectar = traits.stage === "worker" || traits.stage === "hive";

  return (
    <div className="profile-container">
      <img className="logo" src={HiveScribeLogo} alt="HiveScribe" />
      <button className="back-button" onClick={() => navigate("/dashboard")}>
        Home
      </button>

      <div className="card">
        <img src={avatar} alt="avatar" className="avatar" />
        <div className="info">
          <p className="address">
            {publicKey ? shortenAddress(publicKey.toBase58()) : "Not Connected"}
          </p>
          <div className="status">
            <span className="badge">{capitalize(traits.stage)}</span>
            <span
              className={`nectar ${showNectar ? "" : "locked-nectar"}`}
              title={
                !showNectar
                  ? "Become a Worker Bee to start earning Nectar"
                  : "Nectar XP"
              }
            >
              <img src={honeyjar} alt="honey jar" className="honey-icon" />
              {showNectar ? `${traits.nectarXP} Nectar XP` : " Nectar Locked"}
            </span>
          </div>
        </div>
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
        <p>🌟 Stage: {capitalize(traits.stage)}</p>
        <p>
          <img src={honeyjar} alt="honey jar" className="honey-icon" />
          Nectar XP: {traits.nectarXP}
        </p>
        <p>🔥 Missions: {completedMissions}/4 completed</p>
        <p>🎖️ Traits Unlocked: {unlockedTraits}</p>

        <button
          className="view-missions-button"
          onClick={() => navigate("/missions")}
        >
          → View Missions & Traits
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
