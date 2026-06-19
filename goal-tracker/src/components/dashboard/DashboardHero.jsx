import { Card, CardContent, Typography, Button, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { useLanguage } from "../../context/LanguagesContext";
import en from "../../i18n/en";
import fa from "../../i18n/fa";
export default function DashboardHero({ navigate, exportGoals, title }) {
  const { language } = useLanguage();
  const t = language === "fa" ? fa : en;
  const theme = useTheme();
  const mode = theme.palette.mode;
  const actionButtonStyle = {
    width: {
      xs: "100%",
      sm: "auto",
    },

    fontSize: {
      xs: "0.8rem",
      md: "0.95rem",
    },

    py: {
      xs: 1,
      md: 1.3,
    },
    bgcolor: mode === "dark" ? "#22c55e" : "#08ad10",
    color: "white",
    borderRadius: 2,
    fontWeight: "bold",
    transition: "all 0.3s ease",

    "&:hover": {
      transform: "translateY(-3px)",
      boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
    },
  };

  return (
    <Card
      sx={{
        p: {
          xs: 2,
          sm: 3,
          md: 4,
        },
        borderRadius: {
          xs: 2,
          md: 4,
        },
        mb: 3,
      }}
    >
      <CardContent>
        <Typography
          fontWeight="bold"
          gutterBottom
          sx={{
            fontSize: {
              xs: "1.3rem",
              sm: "1.7rem",
              md: "2rem",
            },
          }}
        >
          {t.welcomeDear}
        </Typography>

        <Typography
          sx={{
            fontWeight: "bold",
            mb: 1,
            fontSize: {
              xs: "1rem",
              sm: "1.3rem",
              md: "1.5rem",
            },
          }}
          fontWeight="bold"
          mb={1}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            mb: 3,
            fontSize: {
              xs: "0.85rem",
              sm: "1rem",
            },
          }}
          color="text.secondary"
          sx={{ mb: 3 }}
        >
          {t.dashboardDescription}
        </Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          flexWrap="wrap"
          useFlexGap
        >
          <Button
            sx={actionButtonStyle}
            variant="contained"
            onClick={() => navigate("/create")}
          >
            {t.createGoal}
          </Button>

          <Button
            sx={actionButtonStyle}
            variant="contained"
            onClick={() => navigate("/goals")}
          >
            {t.viewAllGoals}
          </Button>

          <Button
            sx={actionButtonStyle}
            variant="contained"
            onClick={exportGoals}
          >
            {t.export}
          </Button>

          <Button
            sx={actionButtonStyle}
            variant="contained"
            onClick={() => navigate("/categories")}
          >
            {t.categories}
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
