import { Box, Button, Stack, Typography } from "@mui/material";

import { Link as RouterLink, useLocation } from "react-router-dom";
import { useLanguage } from "../../context/LanguagesContext";
import en from "../../i18n/en";
import fa from "../../i18n/fa";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";

export default function Sidebar() {
  const location = useLocation();
  const { language } = useLanguage();
  const t = language === "fa" ? fa : en;
  const isRTL = language === "fa";

  const menu = [
    { path: "/", label: t.dashboard },
    { path: "/goals", label: t.goals },
    { path: "/create", label: t.createGoal },
    { path: "/categories", label: t.categories },
    { path: "/settings", label: t.settings },
  ];

  return (
    <Box
      sx={{
        width: {
          xs: 100,
          sm: 190,
          md: 250,
          lg: 240,
        },

        minHeight: "100vh",
        bgcolor: "background.default",
        borderRight: "1px solid",
        borderColor: "divider",
        p: {
          xs: 0.5,
          sm: 2,
          md: 2.5,
        },
        position: "fixed",
        top: 0,
        [isRTL ? "right" : "left"]: 0,
         mt: 3,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 4 }}>
        <TrackChangesIcon sx={{ color: "primary.main", fontSize: 32 }} />
        <Typography
          variant="h6"
          sx={{
            fontSize: {
              xs: "14px",
              sm: "16px",
              md: "18px",
            },
            fontWeight: "bold",
            mb: -2,
          }}
        >
          {t.goaltracker}
        </Typography>
      </Box>

      <Stack spacing={{ xs: 0.8, md: 1 }}>
        {menu.map((item) => (
          <Button
            key={item.path}
            component={RouterLink}
            to={item.path}
            fullWidth
            sx={{
              justifyContent: "flex-start",
              borderRadius: 2,
              px: 2,
              py: 1,
              bgcolor:
                location.pathname === item.path
                  ? "primary.main"
                  : "transparent",
              color: location.pathname === item.path ? "#fff" : "text.primary",
              fontSize: {
                xs: "10px",
                sm: "13px",
                md: "14px",
              },
            }}
          >
            {item.label}
          </Button>
        ))}
      </Stack>
    </Box>
  );
}
