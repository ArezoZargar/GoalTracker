import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useLanguage } from "../../context/LanguagesContext";

export default function AppShell() {
  const { language } = useLanguage();
  const isRTL = language === "fa";
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />

      <Box
        component="main"
        sx={{
          [isRTL ? "mr" : "ml"]: {
            xs: "100px",
            sm: "190px",
            md: "250px",
            lg: "240px",
          },
          p: { xs: 0.5, md: 3 },
          width: "100%",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
