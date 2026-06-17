import { createContext, useContext, useEffect, useState } from "react";
import { sampleGoals } from "../data/sampleGoals";
import { loadGoals, saveGoals } from "../utils/localStorage";

const GoalContext = createContext();

export const GoalProvider = ({ children }) => {
  const [goals, setGoals] = useState(() => {
    return loadGoals() || sampleGoals;
  });

  useEffect(() => {
    saveGoals(goals);
  }, [goals]);

  const addGoal = (goal) => {
    setGoals((prev) => [...prev, goal]);
  };

  const deleteGoal = (id) => {
    setGoals((prev) => prev.filter((g) => g.id !== id));
  };

  const updateGoal = (updatedGoal) => {
    setGoals((prev) =>
      prev.map((goal) =>
        goal.id === updatedGoal.id ? updatedGoal : goal
      )
    );
  };

  const markProgress = (id, amount = 1) => {
    setGoals((prev) =>
      prev.map((goal) => {
        if (goal.id !== id) return goal;

        const newProgress = goal.progress + amount;

        return {
          ...goal,
          progress: newProgress,
          status:
            newProgress >= goal.target
              ? "completed"
              : goal.status,
        };
      })
    );
  };

  const pauseGoal = (id) => {
    setGoals((prev) =>
      prev.map((goal) =>
        goal.id === id
          ? {
              ...goal,
              status:
                goal.status === "paused"
                  ? "active"
                  : "paused",
            }
          : goal
      )
    );
  };

  return (
    <GoalContext.Provider
      value={{
        goals,
        addGoal,
        deleteGoal,
        updateGoal,
        markProgress,
        pauseGoal,
      }}
    >
      {children}
    </GoalContext.Provider>
  );
};

export const useGoals = () => useContext(GoalContext);