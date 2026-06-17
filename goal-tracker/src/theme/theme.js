import { createTheme } from "@mui/material/styles";

export const getTheme = (mode) =>
  createTheme({
    
    palette: {
      mode, // 👈 فقط "light" یا "dark"
      primary: {
        main: mode === "dark" ? "#22c55e" :"#24b910",
      },
      background: {
        default: mode === "dark" ? "#0b1410" : "#d0f3d0",
        paper: mode === "dark" ? "#102018" : "#daffd2",
      },
      text: {
        primary: mode === "dark" ? "#fff" : "#163314",
      },
    },
  });