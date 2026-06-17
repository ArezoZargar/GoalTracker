
export function calculateXP(goals = []) {
  return goals.reduce((sum, goal) => {
    const logs = goal.logs || [];
    return sum + logs.length * 20;
  }, 0);
}

export function calculateLevel(xp) {
  return Math.floor(xp / 100) + 1;
}

