import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import questions from "../data/questions";
import { useTrait } from "../context/Traitcontext";
import { useWallet } from "@solana/wallet-adapter-react";
import { checkMissions } from "../Utils/missionChecker"; //work on this
import MissionPopup from "../components/missionPopUp";
import HiveScribeLogo from "../assets/HIVESCRIBE.png";
import nectarIcon from "../assets/icons/nectarIcon.png";

const TaskPage = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState("");
  const [feedback, setFeedback] = useState("");
  const [showNext, setShowNext] = useState(false);
  const [missionRewards, setMissionRewards] = useState([]);
  const [startTime, setStartTime] = useState(Date.now());

  const [correctAnswersInARow, setCorrectAnswersInARow] = useState(0);
  const [totalCorrectBeforeSkip, setTotalCorrectBeforeSkip] = useState(0);
  const [hasSkipped, setHasSkipped] = useState(false);
  const [hasAnsweredFirstQToday, setHasAnsweredFirstQToday] = useState(false);

  const { traits, setTraits, addXP, incrementQuiz } = useTrait();
  const question = questions[index];
  const { publicKey } = useWallet();
  const playerXP = traits.playerXP;

  useEffect(() => {
    setStartTime(Date.now());
  }, [index]);
  const shortenAddress = (address) => {
    if (!address) return "";
    const str = address;
    return `${str.slice(0, 4)}******${str.slice(-6)}`;
  };
  const capitalize = (s) => s?.charAt(0).toUpperCase() + s.slice(1);
  const handleSubmit = () => {
    if (input === "" && question.type === "mcq") {
      setFeedback("Please select an answer before submitting.");
      return;
    }

    let correct = false;
    if (question.type === "mcq") {
      correct = parseInt(input, 10) === question.correctIndex;
    } else if (question.type === "text") {
      correct = input.trim().toLowerCase() === question.answer.toLowerCase();
    }

    const endTime = Date.now();
    const timeTaken = (endTime - startTime) / 1000;

    let earnedXP = 0;
    let justAnsweredCorrectlyOnFirstTry = correct;

    if (correct) {
      earnedXP += 3;
      setCorrectAnswersInARow((prev) => prev + 1);
      if (!hasSkipped) {
        setTotalCorrectBeforeSkip((prev) => prev + 1);
      }

      if (!hasAnsweredFirstQToday) {
        setHasAnsweredFirstQToday(true);
      }

      if (index === questions.length - 1) {
        incrementQuiz();
      }
    } else {
      setCorrectAnswersInARow(0);
    }

    const progressStats = {
      correctAnswersInARow,
      totalCorrectAnswersBeforeFirstSkip: totalCorrectBeforeSkip,
      justAnsweredCorrectlyOnFirstTry,
      hasAnsweredFirstQToday: hasAnsweredFirstQToday,
    };

    const totalXP = correct ? earnedXP : 0;

    const tempTraits = {
      ...traits,
      playerXP: traits.playerXP + totalXP,
    };

    const { updatedTraits, rewards } = checkMissions(tempTraits, progressStats);

    setTraits(updatedTraits);

    const passedMissions = rewards
      .filter((r) => r.mission)
      .map((r) => r.mission);

    setMissionRewards(passedMissions);
    setFeedback(correct ? `✅ Correct! +${totalXP} XP` : "❌ Wrong");
    setShowNext(true);
  };

  const handleNext = () => {
    setIndex((prev) => prev + 1);
    setInput("");
    setFeedback("");
    setShowNext(false);
    setMissionRewards([]);
    setHasSkipped(false);
  };

  const handleSkip = () => {
    setHasSkipped(true);
    setCorrectAnswersInARow(0);
    handleNext();
  };

  if (!question) {
    return <h2 style={{ textAlign: "center" }}>🎉 All tasks completed!</h2>;
  }

  return (
    <div className="task-container">
      <div className="hud-profile-info">
        <span className="profile-rank">🪜 {capitalize(traits.stage)}</span>
        <span className="profile-wallet">
          🔑{" "}
          {publicKey ? shortenAddress(publicKey.toBase58()) : "Not Connected"}
        </span>
        <span className="profile-xp">⚡ XP: {playerXP}</span>
        <span className="profile-nectar">
          <p>
            <img src={nectarIcon} alt="nectar" className="nectar-icon" />:{" "}
            Nectar: {traits.nectar}
          </p>
        </span>
      </div>
      <img
        className="hiveimage-in-task"
        src={HiveScribeLogo}
        alt="HiveScribe"
      />
      <button onClick={() => navigate("/dashboard")} className="nav-button">
        🏠 Home
      </button>

      <div className="task-card">
        <h2>{question.question}</h2>

        {question.type === "mcq" && (
          <ul>
            {question.options.map((option, i) => (
              <li key={i}>
                <label>
                  <input
                    type="radio"
                    name="mcq"
                    value={i}
                    checked={parseInt(input, 10) === i}
                    onChange={(e) => setInput(parseInt(e.target.value, 10))}
                  />{" "}
                  {option}
                </label>
              </li>
            ))}
          </ul>
        )}

        {question.type === "text" && (
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your answer"
          />
        )}

        {feedback && <p className="feedback">{feedback}</p>}

        {showNext ? (
          <button className="next-button" onClick={handleNext}>
            Next Question
          </button>
        ) : (
          <div className="button-row">
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={handleSkip} className="skip-button">
              Skip
            </button>
          </div>
        )}
      </div>

      {missionRewards.length > 0 && (
        <MissionPopup
          passedMissions={missionRewards}
          onClose={() => setMissionRewards([])}
        />
      )}
    </div>
  );
};

export default TaskPage;
