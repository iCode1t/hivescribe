import React from "react";
import { useNavigate } from "react-router-dom";
import { useTrait } from "../context/Traitcontext";
import { useWallet } from "@solana/wallet-adapter-react";
import { ensureUserProfile } from "../Utils/ensureUserProfile";

import { useConnection } from "@solana/wallet-adapter-react";
import StatusCard from "../components/StatusCard";
import Honey from "../assets/icons/honeyAsScroll.png";
import Hive from "../assets/icons/hiveAsScroll.png";
import WorkerBee from "../assets/icons/workerBeeAsScroll.png";
import Pupa from "../assets/icons/pupaAsScroll.png";
import larva from "../assets/icons/larvaAsScroll.png";
import honeyJarIcon from "../assets/icons/nectarAsXpIcon.png";

const Dashboard = () => {
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
  const xp = traits.nectarXP;

  const renderNectarXp = (cardStage) => {
    const cardIndex = stageOrder.indexOf(cardStage);

    if (cardStage === "honey") {
      return traits.stage === "hive" ? `${traits.honey} Honey` : "Locked";
    }

    if (cardIndex < currentStageIndex) return " Completed";
    if (cardIndex === currentStageIndex) return `${xp} xp`;
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
      <button
        className="profile-button"
        onClick={() => navigate("/profilepage")}
      >
        My Profile
      </button>

      {/* HONEY - Only unlocked at hive level */}
      <StatusCard
        label="HONEY"
        icon={Honey}
        honeyIcon={honeyJarIcon}
        NectarXp={renderNectarXp("honey")}
        locked={isLocked("honey")}
      />

      {/* HIVE */}
      <StatusCard
        label="HIVE"
        icon={Hive}
        honeyIcon={honeyJarIcon}
        NectarXp={renderNectarXp("hive")}
        locked={isLocked("hive")}
      />

      {/* WORKER BEE */}
      <StatusCard
        label="WORKER BEE"
        icon={WorkerBee}
        honeyIcon={honeyJarIcon}
        NectarXp={renderNectarXp("worker")}
        locked={isLocked("worker")}
      />

      {/* PUPA */}
      <StatusCard
        label="PUPA"
        icon={Pupa}
        honeyIcon={honeyJarIcon}
        NectarXp={renderNectarXp("pupa")}
        locked={isLocked("pupa")}
      />

      {/* LARVA */}
      <StatusCard
        label="LARVA"
        icon={larva}
        honeyIcon={honeyJarIcon}
        NectarXp={renderNectarXp("larva")}
        locked={isLocked("larva")}
      />

      <button className="to-task-page-button" onClick={handleStartTask}>
        Start Task
      </button>
    </div>
  );
};

export default Dashboard;
