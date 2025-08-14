// src/utils/missionChecker.js
export const checkMissions = (traits, progressStats = {}) => {
  const {
    correctAnswersInARow = 0,
    totalCorrectAnswersBeforeFirstSkip = 0,
    justAnsweredCorrectlyOnFirstTry = false,
    hasAnsweredFirstQToday = false,
  } = progressStats;

  const rewards = [];
  const updated = { ...traits };
  updated.completedMissions = [...(updated.completedMissions || [])];

  if (
    !updated.completedMissions.includes("hatched") &&
    justAnsweredCorrectlyOnFirstTry
  ) {
    updated.completedMissions.push("hatched");
    updated.nectar = (updated.nectar || 0) + 1;
    rewards.push({ mission: "Hatched", nectar: 1 });
  }

  if (
    !updated.completedMissions.includes("hotStreak") &&
    correctAnswersInARow >= 5
  ) {
    updated.completedMissions.push("hotStreak");
    updated.nectar = (updated.nectar || 0) + 1;
    rewards.push({ mission: "Hot Streak", nectar: 1 });
  }

  if (
    !updated.completedMissions.includes("loyalBee") &&
    hasAnsweredFirstQToday
  ) {
    updated.completedMissions.push("loyalBee");
    updated.nectar = (updated.nectar || 0) + 1;
    rewards.push({ mission: "Loyal Bee", nectar: 1 });
  }

  const hasAllThree =
    updated.completedMissions.includes("hatched") &&
    updated.completedMissions.includes("hotStreak") &&
    updated.completedMissions.includes("loyalBee");

  if (hasAllThree && !updated.completedMissions.includes("trueBee")) {
    updated.completedMissions.push("trueBee");
    updated.nectar = (updated.nectar || 0) + 1;
    rewards.push({ mission: "True Bee", nectar: 1 });
  }

  // Stage promotions (make sure thresholds match your design)
  const totalXP = updated.playerXP || 0;
  const totalNectar = updated.nectar || 0;

  if (updated.stage === "larva" && totalXP >= 5 && totalNectar >= 1) {
    updated.stage = "pupa";
    rewards.push({ stage: "Promoted to Pupa!" });
  }
  if (updated.stage === "pupa" && totalXP >= 10) {
    updated.stage = "worker";
    rewards.push({
      stage: "Promoted to Worker Bee! You can now collect Nectar!",
    });
  }
  if (updated.stage === "worker" && totalXP >= 30) {
    updated.stage = "hive";
    updated.honey = (updated.honey || 0) + 1;
    rewards.push({ stage: "Joined the Hive!", honey: 1 });
  }

  return { updatedTraits: updated, rewards };
};
