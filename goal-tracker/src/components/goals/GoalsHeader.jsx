import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useLanguage } from "../../context/LanguagesContext";
import en from "../../i18n/en";
import fa from "../../i18n/fa";

export default function GoalsHeader({ onCreate }) {
  const { language } = useLanguage();
  const t = language === "fa" ? fa : en;
  const theme = useTheme();
  const mode = theme.palette.mode;
  const isRTL = language === "fa";

  return (
    <Card
      sx={{
        mb: 3,
        borderRadius: 3,
        px: { xs: 2, md: 3 },
        py: { xs: 2, md: 3 },
      }}
    >
      <CardContent>
        <Box
          sx={{
            textAlign: { xs: "center", sm: isRTL ? "right" : "left" },
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{
              fontSize: {
                xs: "1.5rem",
                sm: "2rem",
                md: "2.2rem",
              },
            }}
          >
            {t.goalsManagement}
          </Typography>

          <Typography
            color="text.secondary"
            sx={{
              mt: 1,
              fontSize: {
                xs: "0.9rem",
                md: "1rem",
              },
            }}
          >
            {t.goalsDescription}
          </Typography>

          <Button
            variant="contained"
            onClick={onCreate}
            fullWidth={{ xs: true, sm: false }}
            sx={{
              mt: 2,
              borderRadius: 2,
              fontWeight: "bold",
              px: 1,
              py: 1,

              bgcolor: mode === "dark" ? "#22c55e" : "#08ad10",

              transition: "all 0.3s ease",

              "&:hover": {
                transform: "translateY(-3px)",
                boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
              },
            }}
          >
            {t.createGoal}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
