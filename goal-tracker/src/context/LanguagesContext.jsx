/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from "react";
import { load, save, STORAGE_KEYS } from "../utils/storage";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(load(STORAGE_KEYS.LANGUAGE, "en"));

  useEffect(() => {
    save(STORAGE_KEYS.LANGUAGE, language);

    document.documentElement.dir = language === "fa" ? "rtl" : "ltr";
  }, [language]);

  function toggleLanguage() {
    setLanguage((prev) => (prev === "en" ? "fa" : "en"));
  }

  function setEnglish() {
    setLanguage("en");
  }

  function setPersian() {
    setLanguage("fa");
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage,
        setEnglish,
        setPersian,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
