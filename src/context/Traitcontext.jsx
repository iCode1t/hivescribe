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
    nectarXP: 0,
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
      .find((level) => traits.nectarXP >= level.minXP);

    if (current && current.stage !== traits.stage) {
      setTraits((prev) => ({ ...prev, stage: current.stage }));
    }
  }, [traits.nectarXP]);

  const addXP = (amount) => {
    setTraits((prev) => ({
      ...prev,
      nectarXP: prev.nectarXP + amount,
    }));
  };

  const completeMission = (missionName, rewardXP = 0, rewardHoney = 0) => {
    if (!traits.completedMissions.includes(missionName)) {
      setTraits((prev) => ({
        ...prev,
        nectarXP: prev.nectarXP + rewardXP,
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
