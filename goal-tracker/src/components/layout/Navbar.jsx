import {
  Box,
  Button,
  Stack,
  Typography,
} from "@mui/material";

import { Link as RouterLink, useLocation } from "react-router-dom";

import { useLanguage } from "../../context/LanguagesContext";
import en from "../../i18n/en";
import fa from "../../i18n/fa";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";

export default function Navbar() {
  const location = useLocation();
const { language } = useLanguage();
  const t = language === "fa" ? fa : en;
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
        width: 240,
        minHeight: "100vh",
        bgcolor: "background.default",
        borderRight: "1px solid",
        borderColor: "divider",
        p: 3,
        position: "sticky",
    top: 0,
      }}
    >
      {/* HEADER BRAND */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          mb: 4,
        }}
      >
        <TrackChangesIcon
          sx={{
            color: "primary.main",
            fontSize: 32,
          }}
        />

        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "primary.main",
          }}
        >
          {t.goaltracker}
        </Typography>
      </Box>

      {/* MENU */}
      <Stack spacing={1}>
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

              color:
                location.pathname === item.path
                  ? "#fff"
                  : "text.primary",

              "&:hover": {
                bgcolor: "primary.light",
                color: "#fff",
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