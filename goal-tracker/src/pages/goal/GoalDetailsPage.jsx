import { useParams } from "react-router-dom";
import { useGoals } from "../../context/GoalsContext";
import { Box, Button } from "@mui/material";
import GoalDetails from "../../components/goals/GoalDetails";
import { useNavigate } from "react-router-dom";
import EmptyState from "../../components/common/EmptyState";
import { useLanguage } from "../../context/LanguagesContext";
import en from "../../i18n/en";
import fa from "../../i18n/fa";
export default function GoalDetailsPage() {
  const { language } = useLanguage();
const t = language === "fa" ? fa : en;
  const { id } = useParams();
  const { state, dispatch } = useGoals();
  const navigate = useNavigate();
  const goal = state.goals?.find((g) => String(g.id) === String(id));

  if (!goal) {
    return (
      <EmptyState
       title={t.goalNotFound}
  description={t.goalNotFoundDescription}
      >
        <Button
          variant="contained"
          onClick={() => navigate("/goals")}
          sx={{
            mt: 2,
            fontSize: { xs: "0.75rem", sm: "0.95rem" },
            px: { xs: 2, sm: 3 },
          }}
        >
          {t.backToGoals}
        </Button>
      </EmptyState>
    );
  }

  return (
    <Box sx={{ maxWidth: 800, mx: "auto", p: 3 }}>
      <GoalDetails goal={goal} dispatch={dispatch} />
    </Box>
  );
}
