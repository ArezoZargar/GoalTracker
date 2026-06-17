import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function AppShell() {
  return (
    <Box sx={{  display: "flex",
    alignItems: "flex-start", }}>
      {/* Sidebar */}
      <Navbar />

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flex: 1,
    p: 3,
    minWidth: 0,
    
  }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}