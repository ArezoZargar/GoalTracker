export function calculateStreak(goals) {
  const allLogs = goals.flatMap((g) => g.logs || []);

  if (allLogs.length === 0) return 0;

  const uniqueDays = [
    ...new Set(allLogs.map((log) => new Date(log.date).toDateString())),
  ].sort((a, b) => new Date(b) - new Date(a));

  const today = new Date();

  const lastLog = new Date(uniqueDays[0]);

  const firstDiff = Math.floor((today - lastLog) / (1000 * 60 * 60 * 24));

  if (firstDiff > 1) {
    return 0;
  }

  let streak = 1;
  let current = lastLog;

  for (let i = 1; i < uniqueDays.length; i++) {
    const logDate = new Date(uniqueDays[i]);

    const diff = Math.floor((current - logDate) / (1000 * 60 * 60 * 24));

    if (diff === 1) {
      streak++;
      current = logDate;
    } else {
      break;
    }
  }

  return streak;
}
