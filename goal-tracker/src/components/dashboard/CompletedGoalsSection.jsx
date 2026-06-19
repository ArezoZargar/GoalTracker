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
        fontWeight="bold"
        sx={{
          mt: 4,
          mb: 2,
          fontSize: {
            xs: "1.2rem",
            sm: "1.4rem",
            md: "1.6rem",
          },
        }}
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
              width: "100%",
              display: "flex",
              flexWrap: "wrap",

              justifyContent: {
                xs: "center",
                sm: "flex-start",
              },

              alignItems: "flex-start",
              gap: 2,
            }}
          >
            {completedGoals.slice(-4).map((goal) => (
              <Box
                key={goal.id}
                sx={{
                  flex: {
                    xs: "0 0 100%",
                    sm: "0 0 260px",
                    md: "0 0 220px",
                  },

                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <CompletedGoalCard goal={goal} />
              </Box>
            ))}
          </Box>
        )}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: {
            xs: "center",
            md: "flex-start",
          },
        }}
      >
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
      </Box>
    </>
  );
}
