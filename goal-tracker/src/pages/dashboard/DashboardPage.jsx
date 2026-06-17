import { useGoals } from "../../context/GoalsContext";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { calculateXP, calculateLevel } from "../../utils/xp";
import { calculateStreak } from "../../utils/streak";

import { useLanguage } from "../../context/LanguagesContext";
import en from "../../i18n/en";
import fa from "../../i18n/fa";

import { Link as RouterLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Stack } from "@mui/material";
import StatCard from "../../components/dashboard/StatCard";
import GoalCard from "../../components/goals/GoalCard";

import RecentGoalCard from "../../components/dashboard/RecentGoalCard";
import LoadingState from "../../components/common/LoadingState";
import DashboardHero from "../../components/dashboard/DashboardHero";
import ActiveGoalsSection from "../../components/dashboard/ActiveGoalsSection";
import CompletedGoalsSection from "../../components/dashboard/CompletedGoalsSection";
import EmptyState from "../../components/common/EmptyState";
export default function DashboardPage() {
  const { state } = useGoals();

  const goals = state.goals || [];
  const loading = state.loading;

  const navigate = useNavigate();

 
  const { language } = useLanguage();

  const t = language === "fa" ? fa : en;

  // 🔥 FULL PAGE BLOCK
  if (loading) {
    return <LoadingState />;
  }

  const xp = calculateXP(goals);
  const level = calculateLevel(xp);
  const streak = calculateStreak(goals);

  const activeGoals = goals.filter((g) => g.status === "active");
  const completedGoals = goals.filter((g) => g.status === "completed");

  const total = goals.length;
  const completed = completedGoals.length;
  const active = activeGoals.length;

  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

  function exportGoals() {
    const dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(goals, null, 2));

    const link = document.createElement("a");
    link.setAttribute("href", dataStr);
  link.setAttribute("download", t.exportFileName);
    link.click();
  }

  return (
    <Box>
      <DashboardHero
        navigate={navigate}
        exportGoals={exportGoals}
        title={t.dashboard}
        xp={xp}
        level={level}
        streak={streak}
      />

      <Grid container spacing={2} mb={2} sx={{ py: 3 }}>
        <StatCard title={t.total} value={total} icon="📊" />
        <StatCard title={t.active} value={active} icon="⚡" />
        <StatCard title={t.completed} value={completed} icon="✅" />
        <StatCard title={t.progress} value={`${percent}%`} icon="📈" />
        <StatCard title="XP"  value={`${xp} ${t.xp}`} icon="⚡" />
        <StatCard title={t.level} value={`${t.levelText} ${level}`} icon="🏆" />
        <StatCard title={t.streak} value={`${streak} ${t.days}`} icon="🚀" />
      </Grid>

      <ActiveGoalsSection activeGoals={activeGoals} />

      {/* COMPLETED */}
      {/* COMPLETED */}
      <CompletedGoalsSection completedGoals={completedGoals} />

    {/* RECENT */}
<Typography variant="h5" fontWeight="bold" sx={{ mt: 4, mb: 2 }}>
 {t.recentGoals}
</Typography>

{goals.length === 0 ? (
  <Box
    sx={{
      width: "100%",
      display: "flex",
      justifyContent: "center",
      py: 6,
    }}
  >
    <EmptyState
      title={t.noRecentGoals}
      description={t.startCreatingGoals}
    />
  </Box>
) : (
  <Box
    sx={{
      display: "flex",
      flexWrap: "wrap",
      gap: 2,
      justifyContent: "flex-start",
    }}
  >
    {goals
      .slice(-4)
      .reverse()
      .map((goal) => (
        <Box key={goal.id} sx={{ width: 180 }}>
          <RecentGoalCard goal={goal} />
        </Box>
      ))}
  </Box>
)}
</Box>
  );
}
