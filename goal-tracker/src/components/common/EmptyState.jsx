import { Box, Typography, Button } from "@mui/material";
import { useLanguage } from "../../context/LanguagesContext";
import en from "../../i18n/en";
import fa from "../../i18n/fa";
export default function EmptyState({ title, description, children }) {
  const { language } = useLanguage();

  const t = language === "fa" ? fa : en;

  return (
    <Box
      sx={{
        textAlign: "center",
        py: { xs: 4, sm: 6 },
        px: 2,
      }}
    >
      <Typography sx={{ fontSize: { xs: 36, sm: 50 }, mb: 1 }}>📭</Typography>

      <Typography
        sx={{
          fontSize: { xs: "1rem", sm: "1.25rem" },
          fontWeight: "bold",
        }}
      >
        {title || t.noData}
      </Typography>

      <Typography
        color="text.secondary"
        sx={{
          mt: 1,
          fontSize: { xs: "0.85rem", sm: "1rem" },
        }}
      >
        {description || t.nothingToShow}
      </Typography>

      {children}
    </Box>
  );
}
