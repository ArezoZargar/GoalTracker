import { createContext, useContext, useReducer, useEffect } from "react";

import { load, STORAGE_KEYS } from "../utils/storage";
const safeGoals = (() => {
  try {
    return JSON.parse(localStorage.getItem("goals")) || [];
  } catch {
    return [];
  }
})();

const GoalsContext = createContext();

const XP_PER_ACTION = 20;

const savedGoals = load(STORAGE_KEYS.goals, []);
const initialState = {
  goals: load(STORAGE_KEYS.goals, []),
  loading: false,
};


function reducer(state, action) {
  switch (action.type) {
    case "ADD_GOAL":
  const updated = [...state.goals, action.payload];

  localStorage.setItem(
    STORAGE_KEYS.goals,
    JSON.stringify(updated)
  );

  return {
    ...state,
    goals: updated,
  };
case "SET_LOADING":
  return {
    ...state,
    loading: action.payload,
  };
    case "DELETE_GOAL":
      return {
        ...state,
        goals: state.goals.filter(g => g.id !== action.payload),
      };

    case "MARK_COMPLETE":
      return {
        ...state,
        goals: state.goals.map(goal =>
          goal.id === action.payload
            ? { ...goal, status: "completed", progress: goal.target }
            : goal
        ),
      };

    case "ADD_PROGRESS":
      return {
        ...state,
        goals: state.goals.map(goal => {
          if (goal.id !== action.payload.id) return goal;

          const newProgress = Math.min(
            goal.progress + action.payload.amount,
            goal.target
          );

          const isCompleted = newProgress >= goal.target;

          return {
            ...goal,
            progress: newProgress,
            status: isCompleted ? "completed" : goal.status,
            xp: (goal.xp || 0) + XP_PER_ACTION,
            logs: [
              ...(goal.logs || []),
              {
                date: new Date().toISOString(),
                amount: action.payload.amount,
              },
            ],
          };
        }),
      };

    case "EDIT_GOAL":
      return {
        ...state,
        goals: state.goals.map(goal =>
          goal.id === action.payload.id
            ? { ...goal, ...action.payload, updatedAt: Date.now() }
            : goal
        ),
      };

    case "TOGGLE_PAUSE":
      return {
        ...state,
        goals: state.goals.map(goal =>
          goal.id === action.payload
            ? {
                ...goal,
                status: goal.status === "paused" ? "active" : "paused",
              }
            : goal
        ),
      };

    default:
      return state;
  }
}

export function GoalsProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    loading: false, 
  });


  useEffect(() => {
    dispatch({ type: "SET_LOADING", payload: true });

    setTimeout(() => {
      dispatch({ type: "SET_LOADING", payload: false });
    }, 2000);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEYS.goals,
      JSON.stringify(state.goals)
    );
  }, [state.goals]);
return (
  <GoalsContext.Provider value={{ state, dispatch }}>
    {children}
  </GoalsContext.Provider>
);
}

export const useGoals = () => useContext(GoalsContext);