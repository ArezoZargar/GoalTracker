/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect, useMemo } from "react";
import { load, save, STORAGE_KEYS } from "../utils/storage";
import { getTheme } from "../theme/theme";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(
    load(STORAGE_KEYS.THEME, "light") === "dark",
  );

  useEffect(() => {
    save(STORAGE_KEYS.THEME, darkMode ? "dark" : "light");
  }, [darkMode]);

  function toggleTheme() {
    setDarkMode((prev) => !prev);
  }

  function setLight() {
    setDarkMode(false);
  }

  function setDark() {
    setDarkMode(true);
  }

  const muiTheme = useMemo(() => {
    return getTheme(darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        toggleTheme,
        setLight,
        setDark,
        muiTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => useContext(ThemeContext);
