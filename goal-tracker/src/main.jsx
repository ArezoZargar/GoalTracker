import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { BrowserRouter } from "react-router-dom";

import { GoalsProvider } from "./context/GoalsContext.jsx";
import { ThemeProvider, useThemeContext } from "./context/ThemeContext.jsx";
import { LanguageProvider } from "./context/LanguagesContext.jsx";
import "././styles/App.css";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

function AppWrapper() {
  const { muiTheme } = useThemeContext();

  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      <App />
    </MuiThemeProvider>
  );
}

function Root() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <ThemeProvider>
          <GoalsProvider>
            <AppWrapper />
          </GoalsProvider>
        </ThemeProvider>
      </LanguageProvider>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
);
