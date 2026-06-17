import { Card, CardContent, Typography, LinearProgress, Box } from "@mui/material";
import { useLanguage } from "../../context/LanguagesContext";
import en from "../../i18n/en";
import fa from "../../i18n/fa";
export default function CompletedGoalCard({ goal }) {
   const { language } = useLanguage();
  const t = language === "fa" ? fa : en;
  const progress = goal.target
    ? (goal.progress / goal.target) * 100
    : 0;
const categoryLabels = {
  Study: t.study,
  Work: t.work,
  Health: t.health,
  Fitness: t.fitness,
  Personal: t.personal,
};
  return (
    <Card
      sx={{
        width: 180,
        borderRadius: 3,
        
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
        {/* TITLE */}
        <Typography variant="h6" fontWeight="bold">
          {goal.title}
        </Typography>

        {/* CATEGORY */}
        <Typography variant="body2" color="text.secondary">
         {categoryLabels[goal.category]}
        </Typography>

        {/* PROGRESS */}
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            mt: 1,
            height: 8,
            borderRadius: 5,
            backgroundColor: "#e0e0e0",
            "& .MuiLinearProgress-bar": {
              backgroundColor:
                goal.category === "Study"
                  ? "#1976d2"
                  : goal.category === "Work"
                  ? "#2e7d32"
                  : goal.category === "Health"
                  ? "#d32f2f"
                  : "#9c27b0",
            },
          }}
        />

        {/* STATUS */}
        <Typography sx={{ mt: 1 }} color="success.main">
          {t.completedStatus}
        </Typography>
      </CardContent>
    </Card>
  );
}