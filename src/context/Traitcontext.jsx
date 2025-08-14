import React, { createContext, useContext, useState, useEffect } from "react";

const TraitContext = createContext();

const stageLevels = [
  { stage: "larva", minXP: 0 },
  { stage: "pupa", minXP: 8 },
  { stage: "worker", minXP: 16 },
  { stage: "hive", minXP: 30 },
];

export const TraitProvider = ({ children }) => {
  const [traits, setTraits] = useState({
    playerXP: 0,
    nectar: 0,
    honey: 0,
    stage: "larva",
    quizzesCompletedToday: 0,
    completedMissions: [],
    unlockedTraits: [],
    hasAnsweredFirstQToday: false,
  });

  useEffect(() => {
    const current = stageLevels
      .slice()
      .reverse()
      .find((level) => traits.playerXP >= level.minXP);

    if (current && current.stage !== traits.stage) {
      setTraits((prev) => ({ ...prev, stage: current.stage }));
    }
  }, [traits.playerXP]);

  const addXP = (amount) => {
    setTraits((prev) => ({
      ...prev,
      playerXP: prev.playerXP + amount,
    }));
  };

  const completeMission = (missionName, rewardNectar = 0, rewardHoney = 0) => {
    if (!traits.completedMissions.includes(missionName)) {
      setTraits((prev) => ({
        ...prev,
        nectar: prev.nectar + rewardNectar,
        honey: prev.honey + rewardHoney,
        completedMissions: [...prev.completedMissions, missionName],
      }));
    }
  };

  const incrementQuiz = () => {
    setTraits((prev) => ({
      ...prev,
      quizzesCompletedToday: prev.quizzesCompletedToday + 1,
    }));
  };

  return (
    <TraitContext.Provider
      value={{
        traits,
        setTraits,
        addXP,
        completeMission,
        incrementQuiz,
      }}
    >
      {children}
    </TraitContext.Provider>
  );
};

export const useTrait = () => useContext(TraitContext);
