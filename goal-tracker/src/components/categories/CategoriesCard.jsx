import { useGoals } from "../../context/GoalsContext";
import { useLanguage } from "../../context/LanguagesContext";
import en from "../../i18n/en";
import fa from "../../i18n/fa";
export default function CategoriesPage() {
  const { goals } = useGoals();
  const { language } = useLanguage();
  const t = language === "fa" ? fa : en;
  const categories = {};
  const normalize = (s) => (s || "").toLowerCase().trim();
  goals.forEach((goal) => {
    if (!categories[goal.category]) {
      categories[goal.category] = 0;
    }

    const key = normalize(goal.category);

    if (!categories[key]) {
      categories[key] = 0;
    }
    categories[key]++;
  });

  return (
    <div>
      <h1>{t.categories}</h1>

      {Object.entries(categories).map(([name, count]) => (
        <div key={name}>
          <h3>{language === "fa" ? fa[name.toLowerCase()] || name : name}</h3>

          <p>
            {count} {t.goals}
          </p>
        </div>
      ))}
    </div>
  );
}
