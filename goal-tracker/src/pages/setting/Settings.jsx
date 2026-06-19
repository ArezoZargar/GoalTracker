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
  const isRTL = language === "fa";

  return (
    <Box
      sx={{
        p: { xs: 2, sm: 3, md: 4 },
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: 700,
          borderRadius: 3,
          boxShadow: 3,
        }}
      >
        <CardContent sx={{ p: { xs: 2, md: 4 } }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              mb: 1,
              textAlign: { xs: "center", sm: isRTL ? "right" : "left" },
            }}
          >
            {t.settings}
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              mb: 3,
              textAlign: { xs: "center", sm: isRTL ? "right" : "left" },
            }}
          >
            {t.settingsDescription}
          </Typography>

          <Typography variant="h6" sx={{ mb: 1 }}>
            {t.theme}
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 1,
              mb: 3,
            }}
          >
            <Button
              fullWidth={true}
              variant={darkMode ? "outlined" : "contained"}
              onClick={setLight}
            >
              {t.light}
            </Button>

            <Button
              fullWidth={true}
              variant={darkMode ? "contained" : "outlined"}
              onClick={setDark}
            >
              {t.dark}
            </Button>
          </Box>

          <Typography variant="h6" sx={{ mb: 1 }}>
            {t.language}
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 1,
            }}
          >
            <Button
              fullWidth
              variant={language === "en" ? "contained" : "outlined"}
              onClick={setEnglish}
            >
              English
            </Button>

            <Button
              fullWidth
              variant={language === "fa" ? "contained" : "outlined"}
              onClick={setPersian}
            >
              فارسی
            </Button>
          </Box>
        </CardContent>
      </Card>

      <Card
        sx={{
          width: "100%",
          maxWidth: 700,
          mt: 4,
          borderRadius: 3,
          border: "1px solid #ffcccc",
        }}
      >
        <CardContent sx={{ p: { xs: 2, md: 3 } }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: "error.main",
              textAlign: { xs: "center", sm: isRTL ? "right" : "left" },
            }}
          >
            {t.dangerZone}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              mt: 1,
              mb: 2,
              textAlign: { xs: "center", sm: isRTL ? "right" : "left" },
            }}
          >
            {t.dangerDescription}
          </Typography>

          <Button
            fullWidth
            variant="contained"
            color="error"
            onClick={() => setOpenReset(true)}
          >
            {t.resetAll}
          </Button>
        </CardContent>
      </Card>

      <Dialog open={openReset} onClose={() => setOpenReset(false)}>
        <DialogTitle>{t.dangerZone}</DialogTitle>

        <DialogContent>
          <Typography>{t.resetConfirm}</Typography>
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpenReset(false)}>{t.cancel}</Button>

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
    </Box>
  );
}
