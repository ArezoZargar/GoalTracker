export const DEFAULT_GOALS = [];

export const DEFAULT_SETTINGS = {
  theme: "light",
  language: "en",
};

export function handleResetAll() {
  localStorage.clear();

  document.body.className = "light";
  localStorage.setItem("theme", "light");

  document.documentElement.dir = "ltr";
  localStorage.setItem("lang", "en");

  localStorage.setItem("goals", JSON.stringify([]));

  window.location.reload();
}
