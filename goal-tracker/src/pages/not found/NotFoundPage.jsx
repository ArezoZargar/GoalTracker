import { Button, Typography, Stack, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../context/LanguagesContext";
import en from "../../i18n/en";
import fa from "../../i18n/fa";

export default function NotFoundPage() {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = language === "fa" ? fa : en;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
      }}
    >
      <Stack
        spacing={2}
        alignItems="center"
        sx={{
          textAlign: "center",
          maxWidth: 400,
          p: { xs: 2, sm: 4 },
          borderRadius: 3,
          boxShadow: 3,
          bgcolor: "background.paper",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "4rem", sm: "6rem" },
            fontWeight: "bold",
            color: "primary.main",
            lineHeight: 1,
          }}
        >
          404
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "0.95rem", sm: "1.1rem" },
            color: "text.secondary",
          }}
        >
          {t.pageNotFound}
        </Typography>

        <Button
          variant="contained"
          onClick={() => navigate("/")}
          sx={{
            mt: 1,
            borderRadius: 2,
            px: { xs: 3, sm: 4 },
            fontSize: { xs: "0.8rem", sm: "0.95rem" },
          }}
        >
          {t.goHome}
        </Button>
      </Stack>
    </Box>
  );
}
