import { Button, Typography, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../context/LanguagesContext";
import en from "../../i18n/en";
import fa from "../../i18n/fa";

export default function NotFoundPage() {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = language === "fa" ? fa : en;

  return (
    <Stack spacing={2} alignItems="center">
      <Typography variant="h2">
        404
      </Typography>

      <Typography>
        {t.pageNotFound}
      </Typography>

      <Button
        variant="contained"
        onClick={() => navigate("/")}
      >
        {t.goHome}
      </Button>
    </Stack>
  );
}