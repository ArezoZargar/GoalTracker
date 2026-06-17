import {
  Card,
  CardContent,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { useLanguage } from "../../context/LanguagesContext";
import en from "../../i18n/en";
import fa from "../../i18n/fa";
export default function DashboardHero({
  
  navigate,
  exportGoals,
  title,
})
 {
    const { language } = useLanguage();
  const t = language === "fa" ? fa : en;
   const theme = useTheme();
  const mode = theme.palette.mode;
  const actionButtonStyle = {
    bgcolor: mode === "dark" ?"#22c55e" :"#08ad10",
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
        p: 4,
        borderRadius: 4,
        mb: 3,
      }}
    >
      <CardContent>
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
        >
          {t.welcomeDear}
        </Typography>

        <Typography
          variant="h5"
          fontWeight="bold"
          mb={1}
        >
          {title}
        </Typography>

        <Typography
          color="text.secondary"
          sx={{ mb: 3 }}
        >
          {t.dashboardDescription}
        </Typography>

        <Stack
          direction="row"
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