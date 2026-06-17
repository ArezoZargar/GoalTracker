import { Box, Typography, Button } from "@mui/material";
import { useLanguage } from "../../context/LanguagesContext";
import en from "../../i18n/en";
import fa from "../../i18n/fa";

export default function EmptyState({
  title ,
  description,
  buttonText,
  onClick,
}) {
  const { language } = useLanguage();

  const t = language === "fa" ? fa : en;

  return (
    <Box
      sx={{
        textAlign: "center",
        py: 6,
        px: 2,
      }}
    >
      {/* ICON */}
      <Typography sx={{ fontSize: 50, mb: 1 }}>
        📭
      </Typography>

      {/* TITLE */}
      <Typography variant="h6" fontWeight="bold">
        {title || t.noData}
      </Typography>

      {/* DESCRIPTION */}
      <Typography color="text.secondary" sx={{ mt: 1 }}>
        {description || t.nothingToShow}
      </Typography>

      {/* BUTTON */}
      {buttonText && (
        <Button
          variant="contained"
          sx={{ mt: 2, borderRadius: 2 }}
          onClick={onClick}
        >
          {buttonText}
        </Button>
      )}
    </Box>
  );
}