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
        fontWeight="bold"
        sx={{
          mt: { xs: 3, md: 4 },
          mb: 2,
          fontSize: {
            xs: "1.2rem",
            sm: "1.4rem",
            md: "1.6rem",
          },
        }}
      >
        {t.activeGoals}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: {
            xs: 1.5,
            md: 2,
          },
        }}
      >
        {activeGoals.length === 0 ? (
          <EmptyState
            title={t.noActiveGoals}
            description={t.startCreatingGoals}
            buttonText={t.createGoal}
            onClick={() => navigate("/goals/new")}
          />
        ) : (
          activeGoals.map((goal) => <GoalCard key={goal.id} goal={goal} />)
        )}
      </Box>
    </>
  );
}
