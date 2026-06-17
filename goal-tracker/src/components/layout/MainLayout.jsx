import Box from "@mui/material/Box";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function MainLayout({ children }) {
  return (
    <Box sx={{ display: "flex" }}>
      <Topbar />

      <Sidebar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 4,
          mt: 8,
          bgcolor: "#020617",
          minHeight: "100vh",
          color: "white",
        }}
      >
        {children}
      </Box>
    </Box>
    
  );
  
}

export default MainLayout;