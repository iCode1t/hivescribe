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
    rewards.push({ mission: "Hatched", xp: 4 });
  }

  if (
    !updated.completedMissions.includes("hotStreak") &&
    correctAnswersInARow >= 5
  ) {
    updated.completedMissions.push("hotStreak");
    rewards.push({ mission: "Hot Streak", xp: 6 });
  }

  if (
    !updated.completedMissions.includes("loyalBee") &&
    hasAnsweredFirstQToday
  ) {
    updated.completedMissions.push("loyalBee");
    rewards.push({ mission: "Loyal Bee", xp: 5 });
  }

  const hasAllThree =
    updated.completedMissions.includes("hatched") &&
    updated.completedMissions.includes("hotStreak") &&
    updated.completedMissions.includes("loyalBee");

  if (hasAllThree && !updated.completedMissions.includes("trueBee")) {
    updated.completedMissions.push("trueBee");
    rewards.push({ mission: "True Bee", xp: 5 });
  }

  const totalXP = traits.nectarXP || 0;

  if (updated.stage === "larva" && totalXP >= 5) {
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
