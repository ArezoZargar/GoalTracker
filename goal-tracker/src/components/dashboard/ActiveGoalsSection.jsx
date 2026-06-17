import { Box, Typography } from "@mui/material";
import GoalCard from "../goals/GoalCard";
import EmptyState from "../../components/common/EmptyState";
import { useLanguage } from "../../context/LanguagesContext";

import { useNavigate } from "react-router-dom";
import en from "../../i18n/en";
import fa from "../../i18n/fa";
export default function ActiveGoalsSection({ activeGoals }) {
  const navigate = useNavigate();
 const { language } = useLanguage();
  const t = language === "fa" ? fa : en;
  return (
    <>
      <Typography
        variant="h5"
        fontWeight="bold"
        sx={{ mt: 4, mb: 2 }}
      >
        {t.activeGoals}
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {activeGoals.length === 0 ? (
  <EmptyState
    title={t.noActiveGoals}
    description={t.startCreatingGoals}
    buttonText= {t.createGoal}
    onClick={() => navigate("/create")}
  />
) : (
  activeGoals.map((goal) => (
    <GoalCard key={goal.id} goal={goal} />
  ))
)}
      </Box>
    </>
  );
}