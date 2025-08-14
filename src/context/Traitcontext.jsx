import React, { createContext, useContext, useState, useEffect } from "react";

const TraitContext = createContext();

const stageLevels = [
  { stage: "larva", minXP: 0 },
  { stage: "pupa", minXP: 8 },
  { stage: "worker", minXP: 16 },
  { stage: "hive", minXP: 30 },
];

export const TraitProvider = ({ children }) => {
  const [traits, setTraits] = useState(() => {
    try {
      const savedTraits = localStorage.getItem("hivescribe-traits");

      if (savedTraits) {
        return JSON.parse(savedTraits);
      }
    } catch (error) {
      console.error("Failed to load traits from localStorage", error);
    }

    return {
      playerXP: 0,
      nectar: 0,
      honey: 0,
      stage: "larva",
      quizzesCompletedToday: 0,
      completedMissions: [],
      unlockedTraits: [],
      hasAnsweredFirstQToday: false,
      correctlyAnsweredQuestions: [],
    };
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

  useEffect(() => {
    try {
      localStorage.setItem("hivescribe-traits", JSON.stringify(traits));
    } catch (error) {
      console.error("Failed to save traits to localStorage", error);
    }
  }, [traits]);

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

  const addCorrectlyAnsweredQuestionId = (questionId) => {
    setTraits((prev) => {
      if (!prev.correctlyAnsweredQuestions.includes(questionId)) {
        return {
          ...prev,
          correctlyAnsweredQuestions: [
            ...prev.correctlyAnsweredQuestions,
            questionId,
          ],
        };
      }
      return prev;
    });
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
        addCorrectlyAnsweredQuestionId,
      }}
    >
      {children}
    </TraitContext.Provider>
  );
};

export const useTrait = () => useContext(TraitContext);
