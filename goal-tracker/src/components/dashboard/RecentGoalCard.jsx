import { Card, CardContent, Typography, Chip } from "@mui/material";
import { useLanguage } from "../../context/LanguagesContext";
import en from "../../i18n/en";
import fa from "../../i18n/fa";
export default function RecentGoalCard({ goal }) {
  const { language } = useLanguage();
  const t = language === "fa" ? fa : en;
  const categoryLabels = {
  Study: t.study,
  Work: t.work,
  Health: t.health,
  Fitness: t.fitness,
  Personal: t.personal,
};
const statusLabels = {
  active: t.activeStatus,
  paused: t.pausedStatus,
  completed: t.completedStatus,
};
 
  return (
    <Card
      sx={{
    borderRadius: 3,
    p: 1,
    mb: 2,
    borderLeft: `6px solid ${
      goal.category === "Study"
        ? "#1976d2"
        : goal.category === "Work"
        ? "#2e7d32"
        : goal.category === "Health"
        ? "#d32f2f"
        : goal.category === "Fitness"
        ? "#ed6c02"
        : "#9c27b0"
    }`,
    transition: "all 0.25s ease",
    "&:hover": {
      transform: "translateY(-6px)",
      boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
    },
  }}
    >
      <CardContent>
        {/* Title */}
        <Typography variant="subtitle1" noWrap>
          {goal.title}
        </Typography>

        {/* Category */}
        <Typography fontSize={12} color="text.secondary">
          {categoryLabels[goal.category]}
        </Typography>

        {/* Status */}
        <Chip
          size="small"
          label={statusLabels[goal.status]}
          color={
            goal.status === "completed"
              ? "success"
              : goal.status === "active"
              ? "primary"
              : "warning"
          }
          sx={{ mt: 1 }}
        />
      </CardContent>
    </Card>
  );
}