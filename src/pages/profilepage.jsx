import React, { useState } from "react";
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
  const { traits, setTraits } = useTrait();
  const [showPopup, setShowPopup] = useState(false);
  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);
  const { publicKey } = useWallet();
  const navigate = useNavigate();

  const [conversionInput, setConversionInput] = useState("");

  const [isMinting, setIsMinting] = useState(false);
  const [mintStatus, setMintStatus] = useState(null);

  const level = Math.min(Math.floor((traits.playerXP / 30) * 100), 100);
  const completedMissions = traits.completedMissions?.length || 0;
  const unlockedTraits = traits.unlockedTraits?.length || 0;
  const playerXP = traits.playerXP;

  const ConvertXptoNectar = () => {
    const amountToConvert = parseInt(conversionInput);
    if (isNaN(amountToConvert) || amountToConvert <= 0) {
      alert("Please enter a valid positive number.");
      return;
    }
    if (playerXP < amountToConvert) {
      alert("Not enough XP to perform this conversion.");
      return;
    }
    const convertedNectar = Math.floor(amountToConvert / 10);
    if (amountToConvert < 10) {
      alert("You need at least 10 XP to convert to Nectar.");
      return;
    }
    const newNectar = traits.nectar + convertedNectar;
    const newXP = playerXP - amountToConvert;
    setTraits((prevTraits) => ({
      ...prevTraits,
      playerXP: newXP,
      nectar: newNectar,
    }));
    setConversionInput("");
    closePopup();
    alert(
      `Successfully converted ${amountToConvert} XP to ${convertedNectar} Nectar!`
    );
  };

  const mintHoneyNFT = () => {
    if (!publicKey) {
      alert("Please connect your wallet to mint an NFT.");
      return;
    }

    if (traits.stage !== "hive") {
      alert("You must be at the Hive stage to mint Honey.");
      return;
    }

    const mintCost = 3;
    if (traits.nectar < mintCost) {
      alert(`You need ${mintCost} Nectar to mint Honey.`);
      return;
    }

    setIsMinting(true);
    setMintStatus(null);
    console.log("Attempting to mint Honey NFT...");

    setTimeout(() => {
      setIsMinting(false);

      setTraits((prevTraits) => ({
        ...prevTraits,
        nectar: prevTraits.nectar - mintCost,
      }));

      setMintStatus("success");
      alert("Honey NFT minted successfully!");
    }, 2000);
  };

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

        <button
          className="nav-button"
          onClick={mintHoneyNFT}
          disabled={isMinting || !publicKey}
        >
          {isMinting ? "Minting..." : "🏭 Mint Honey"}
        </button>
        <button className="nav-button" onClick={() => navigate("/leaderboard")}>
          🏆 Leaderboad
        </button>
      </div>

      {mintStatus === "success" && (
        <p style={{ color: "green", marginTop: "1rem" }}>
          NFT Minted! Check your wallet.
        </p>
      )}
      {mintStatus === "error" && (
        <p style={{ color: "red", marginTop: "1rem" }}>
          Minting failed. Please try again.
        </p>
      )}

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
            placeholder=" input xp amount to convert (10 XP = 1 Nectar) "
            value={conversionInput}
            onChange={(e) => setConversionInput(e.target.value)}
          ></input>{" "}
          <button className="nav-button" onClick={ConvertXptoNectar}>
            Convert
          </button>
        </ConvertPopup>
      </div>
    </div>
  );
};

export default ProfilePage;
