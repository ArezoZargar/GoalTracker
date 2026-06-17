import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import { useThemeContext } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguagesContext";
import en from "../../i18n/en";
import fa from "../../i18n/fa";
import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
export default function SettingsPage() {
  const { darkMode, setLight, setDark } = useThemeContext();
  const { language, setEnglish, setPersian } = useLanguage();
const [openReset, setOpenReset] = useState(false);
  const t = language === "fa" ? fa : en;

  const handleReset = () => {
    const confirmed = window.confirm(t.resetConfirm);

    if (!confirmed) return;

    localStorage.clear();
    window.location.reload();
  };

  return (
    <Box sx={{ p: 4 }}>
      <Card sx={{ mx: "auto", borderRadius: 3, boxShadow: 3 }}>
        <CardContent sx={{ p: 4 }}>

          {/* Title */}
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
            {t.settings}
          </Typography>

          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            {t.settingsDescription}
          </Typography>

          <hr style={{ margin: "20px 0" }} />

          {/* Appearance */}
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
            {t.appearance}
          </Typography>

          <Typography variant="body2" sx={{ mb: 2, color: "text.secondary" }}>
            {t.appearanceDescription}
          </Typography>

          <Typography variant="h6" sx={{ mb: 1 }}>
            {t.theme}
          </Typography>

          <Button
            variant={darkMode ? "outlined" : "contained"}
            onClick={setLight}
            sx={{ mr: 2, fontWeight: "bold"}}
          >
            {t.light}
          </Button>

          <Button
            variant={darkMode ? "contained" : "outlined"}
            onClick={setDark}
            sx={{ fontWeight: "bold" }}
          >
            {t.dark}
          </Button>

          <hr style={{ margin: "25px 0" }} />

          {/* Language */}
          <Typography variant="h6" sx={{ mb: 1 }}>
            {t.language}
          </Typography>

          <Button
            variant={language === "en" ? "contained" : "outlined"}
            onClick={setEnglish}
            sx={{ mr: 2, fontWeight: "bold" }}
          >
            English
          </Button>

          <Button
            variant={language === "fa" ? "contained" : "outlined"}
            onClick={setPersian}
            sx={{ fontWeight: "bold" }}
          >
            فارسی
          </Button>

        </CardContent>
      </Card>

      {/* Danger Zone */}
      <Card
        sx={{
          mx: "auto",
          mt: 4,
          borderRadius: 3,
          border: "1px solid #ffcccc",
        }}
      >
        <CardContent sx={{ p: 3 }}>

          <Typography variant="h5" sx={{ fontWeight: "bold", color: "error.main" }}>
            {t.dangerZone}
          </Typography>

          <Typography variant="body2" sx={{ mt: 1, mb: 2 }}>
            {t.dangerDescription}
          </Typography>

        <Button
  variant="contained"
  color="error"
  size="large"
  sx={{
    fontWeight: "bold",
    borderRadius: 2,
    px: 3,
  }}
  onClick={() => setOpenReset(true)}
>
  {t.resetAll}
</Button>
<Dialog open={openReset} onClose={() => setOpenReset(false)}>
  <DialogTitle>{t.dangerZone}</DialogTitle>

  <DialogContent>
    <Typography>
      {t.resetConfirm}
    </Typography>
  </DialogContent>

  <DialogActions>
    <Button onClick={() => handleReset(false)}>
      {t.cancel}
    </Button>

    <Button
      color="error"
      variant="contained"
      onClick={() => {
        localStorage.clear();
        window.location.reload();
      }}
    >
      {t.resetAll}
    </Button>
  </DialogActions>
</Dialog>

        </CardContent>
      </Card>
    </Box>
  );
}