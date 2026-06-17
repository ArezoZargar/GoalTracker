import { Box, Typography, Button, Card } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import CompletedGoalCard from "./CompletedGoalCard";
import EmptyState from "../common/EmptyState";
import { useLanguage } from "../../context/LanguagesContext";
import en from "../../i18n/en";
import fa from "../../i18n/fa";
export default function CompletedGoalsSection({ completedGoals }) {
  const { language } = useLanguage();
  const t = language === "fa" ? fa : en;
  return (
    <>
      <Typography
        variant="h5"
        fontWeight="bold"
        sx={{ mt: 4, mb: 2 }}
      >
        {t.completedArchive}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          
        }}
      >
{completedGoals.length === 0 ? (
  <Box
    sx={{
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      py: 6,
    }}
  >
    <EmptyState
      title={t.noCompletedGoals}
      description={t.finishGoalsToSee}
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
    {completedGoals.slice(-4).map((goal) => (
      <Box key={goal.id} sx={{ width: 220 }}>
        <CompletedGoalCard goal={goal} />
      </Box>
    ))}
  </Box>
)}
      </Box>

      <Button
        sx={{
          mt: 2,
          borderRadius: 2,
          fontWeight: "bold",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-3px)",
            boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
          },
        }}
        component={RouterLink}
        to="/goals?filter=completed"
      >
       {t.viewArchive}
      </Button>
    </>
  );
}