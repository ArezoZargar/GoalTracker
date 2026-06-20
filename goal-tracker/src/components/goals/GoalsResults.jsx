import { Button } from "@mui/material";
import EmptyState from "../common/EmptyState";
import GoalsGrid from "./GoalsGrid";
import { useLanguage } from "../../context/LanguagesContext";
import en from "../../i18n/en";
import fa from "../../i18n/fa";

export default function GoalsResults({
  goals,
  sortedGoals,
  categoryFilter,
  navigate,
}) {
  const { language } = useLanguage();
  const t = language === "fa" ? fa : en;

  if (goals.length === 0) {
    return (
      <EmptyState
        icon="🎯"
        title={t.noGoalsYet}
        description={t.createFirstGoal}
      >
        <Button variant="contained" onClick={() => navigate("/goals/new")}>
          {t.createGoal}
        </Button>
      </EmptyState>
    );
  }

  if (sortedGoals.length === 0) {
    return (
      <EmptyState
        icon="🔍"
        title={t.noGoalsFound}
        description={
          categoryFilter ? `${t.noGoalsInCategory} ` : t.adjustSearch
        }
      >
        <Button variant="contained" onClick={() => navigate("/goals/new")}>
          {t.createGoal}
        </Button>
      </EmptyState>
    );
  }

  return <GoalsGrid goals={sortedGoals} />;
}
