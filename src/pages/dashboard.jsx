import React from "react";
import { useNavigate } from "react-router-dom";
import { useTrait } from "../context/Traitcontext";
import { useWallet } from "@solana/wallet-adapter-react";
import { ensureUserProfile } from "../Utils/ensureUserProfile";

import { useConnection } from "@solana/wallet-adapter-react";
import StatusCard from "../components/StatusCard";
import Hive from "../assets/icons/hiveAsScroll.png";
import WorkerBee from "../assets/icons/workerBeeAsScroll.png";
import Pupa from "../assets/icons/pupaAsScroll.png";
import larva from "../assets/icons/larvaAsScroll.png";
import nectarIcon from "../assets/icons/nectarIcon.png";

const Dashboard = () => {
  const shortenAddress = (address) => {
    if (!address) return "";
    const str = address;
    return `${str.slice(0, 4)}******${str.slice(-6)}`;
  };
  const capitalize = (s) => s?.charAt(0).toUpperCase() + s.slice(1);
  const { publicKey } = useWallet();
  const navigate = useNavigate();
  const { traits } = useTrait();
  const wallet = useWallet();

  const { connection } = useConnection();

  const handleStartTask = async () => {
    const result = await ensureUserProfile(wallet, connection);
    if (result?.created !== false || result?.profile) {
      navigate("/taskPage");
    } else {
      alert(
        "Failed to create or find profile. Make sure your wallet is connected."
      );
    }
  };

  const stageOrder = ["larva", "pupa", "worker", "hive"];
  const currentStageIndex = stageOrder.indexOf(traits.stage);
  const playerXP = traits.playerXP;

  const renderPlayerXp = (cardStage) => {
    const cardIndex = stageOrder.indexOf(cardStage);

    if (cardIndex < currentStageIndex) return " Completed";
    if (cardIndex === currentStageIndex) return `⚡: ${playerXP} `;
    return " Locked";
  };

  const isLocked = (cardStage) => {
    if (cardStage === "honey") {
      return traits.stage !== "hive";
    }
    return stageOrder.indexOf(cardStage) > currentStageIndex;
  };

  return (
    <div className="page-wrapper">
      <div className="hud-profile-info">
        <span className="profile-rank">🪜 {capitalize(traits.stage)}</span>
        <span className="profile-wallet">
          🔑{" "}
          {publicKey ? shortenAddress(publicKey.toBase58()) : "Not Connected"}
        </span>
        <span className="profile-xp">⚡XP: {playerXP}</span>
        <span className="profile-nectar">
          <p>
            <img src={nectarIcon} alt="nectat icon" className="nectar-icon" />
            Nectar: {traits.nectar}
          </p>
        </span>
      </div>
      <div className="nav-buttons-wrapper">
        <button className="nav-button" onClick={() => navigate("/playerguide")}>
          📚 Guides
        </button>
        <button className="nav-button" onClick={handleStartTask}>
          ▶️ Quiz
        </button>
        <button className="nav-button" onClick={() => navigate("/pvpduel")}>
          🆚 Duel
        </button>
        <button className="nav-button" onClick={() => navigate("/profilepage")}>
          👤 Profile
        </button>
      </div>
      <div className="stage-ladder">
        {/* HIVE */}
        <StatusCard
          label="HIVE"
          icon={Hive}
          playerXP={renderPlayerXp("hive")}
          locked={isLocked("hive")}
        />

        {/* WORKER BEE */}
        <StatusCard
          label="WORKER BEE"
          icon={WorkerBee}
          playerXP={renderPlayerXp("worker")}
          locked={isLocked("worker")}
        />

        {/* PUPA */}
        <StatusCard
          label="PUPA"
          icon={Pupa}
          playerXP={renderPlayerXp("pupa")}
          locked={isLocked("pupa")}
        />

        {/* LARVA */}
        <StatusCard
          label="LARVA"
          icon={larva}
          playerXP={renderPlayerXp("larva")}
          locked={isLocked("larva")}
        />
      </div>
    </div>
  );
};

export default Dashboard;
