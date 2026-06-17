export const DEFAULT_GOALS = [];
const [darkMode, setDarkMode] = useState()
const [language, setLanguage] = useState()
function handleResetAll() {}
export const DEFAULT_SETTINGS = {
  theme: "light",
  language: "en",
};

const [darkMode, setDarkMode] = useState(
  localStorage.getItem("theme") === "dark" || false
);
const [language, setLanguage] = useState(
  localStorage.getItem("lang") || "en"
);
function handleResetAll() {
  // 1. Clear storage
  localStorage.clear();

  // 2. Reset theme
  document.body.className = "light";
  localStorage.setItem("theme", "light");

  // 3. Reset language
  document.documentElement.dir = "ltr";
  localStorage.setItem("lang", "en");

  // 4. Reset goals (important)
  localStorage.setItem("goals", JSON.stringify([]));

  // 5. Reload app clean state
  window.location.reload();
}