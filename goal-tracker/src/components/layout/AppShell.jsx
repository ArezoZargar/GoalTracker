import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function AppShell() {
  return (
    <Box sx={{ display: "flex" }}>

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <Box
  component="main"
  sx={{
    ml: { xs: "100px",sm :"200px", md: "240px" }, 
    p: { xs: 0.5, md: 3 },
    width: "100%",
  }}
>
        <Outlet />
      </Box>

    </Box>
  );
}