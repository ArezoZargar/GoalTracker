const STORAGE_KEY = "goal-tracker-pro";

export const loadGoals = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);

    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
};

export const saveGoals = (goals) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(goals));
};