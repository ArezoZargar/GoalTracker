import { useParams } from "react-router-dom";
import { useGoals } from "../../context/GoalsContext";
import { Box } from "@mui/material";
import GoalDetails from "../../components/goals/GoalDetails";

export default function GoalDetailsPage() {
  const { id } = useParams();
  const { state, dispatch } = useGoals();

  const goal = state.goals?.find((g) => String(g.id) === String(id));

  if (!goal) return <h2>Goal Not Found</h2>;

  return (
    <Box sx={{ maxWidth: 800, mx: "auto", p: 3 }}>
      <GoalDetails goal={goal} dispatch={dispatch} />
    </Box>
  );
}