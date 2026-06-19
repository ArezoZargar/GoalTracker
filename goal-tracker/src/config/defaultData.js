export const DEFAULT_GOALS = [];
const [darkMode, setDarkMode] = useState();
const [language, setLanguage] = useState();
function handleResetAll() {}
export const DEFAULT_SETTINGS = {
  theme: "light",
  language: "en",
};

const [darkMode, setDarkMode] = useState(
  localStorage.getItem("theme") === "dark" || false,
);
const [language, setLanguage] = useState(localStorage.getItem("lang") || "en");
function handleResetAll() {
  localStorage.clear();

  document.body.className = "light";
  localStorage.setItem("theme", "light");

  document.documentElement.dir = "ltr";
  localStorage.setItem("lang", "en");

  localStorage.setItem("goals", JSON.stringify([]));

  window.location.reload();
}
