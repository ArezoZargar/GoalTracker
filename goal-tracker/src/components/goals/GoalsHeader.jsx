import { Card, CardContent, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useLanguage } from "../../context/LanguagesContext";
import en from "../../i18n/en";
import fa from "../../i18n/fa";
export default function GoalsHeader({ onCreate }) {
  const { language } = useLanguage();
const t = language === "fa" ? fa : en;
   const theme = useTheme();
  const mode = theme.palette.mode;
  return (
    <Card sx={{ mb: 3, borderRadius: 3 }}>
      <CardContent>
        <Typography variant="h4" fontWeight="bold">
          {t.goalsManagement}

        </Typography>

        <Typography color="text.secondary" sx={{ mt: 1 }}>
          {t.goalsDescription}
        </Typography>

        <Button
          variant="contained"
          onClick={onCreate}
          sx={{
            mt: 2,
            borderRadius: 2,
            fontWeight: "bold",
            px: 3,
            py: 1,
            bgcolor: mode === "dark" ?"#22c55e" :"#08ad10",
            "&:hover": {
              transform: "translateY(-3px)",
              boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
            },
          }}
        >
           {t.createGoal}
        </Button>
      </CardContent>
    </Card>
  );
}