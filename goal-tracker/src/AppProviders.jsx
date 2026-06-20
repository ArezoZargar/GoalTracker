import { BrowserRouter } from "react-router-dom";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import App from "./App.jsx";
import { GoalsProvider } from "./context/GoalsContext.jsx";
import { ThemeProvider, useThemeContext } from "./context/ThemeContext.jsx";
import { LanguageProvider } from "./context/LanguagesContext.jsx";

export function AppWrapper() {
  const { muiTheme } = useThemeContext();

  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      <App />
    </MuiThemeProvider>
  );
}

export function RootApp() {
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
