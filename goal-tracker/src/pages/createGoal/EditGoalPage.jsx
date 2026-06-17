import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGoals } from "../../context/GoalsContext";
import { Snackbar, Alert, Card, CardContent, Typography, Button } from "@mui/material";
import GoalFormFields from "../../components/goals/GoalForm";
import categories from "../../data/categories";
import { useTheme } from "@mui/material/styles";
import { useLanguage } from "../../context/LanguagesContext";
import en from "../../i18n/en";
import fa from "../../i18n/fa";
export default function EditGoalPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { state, dispatch } = useGoals();

  const goals = state.goals || [];
  const goal = goals.find((g) => String(g.id) === String(id));
  const { language } = useLanguage();
const t = language === "fa" ? fa : en;
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("daily");
  const [target, setTarget] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [color, setColor] = useState("#00f10c");
  const [notes, setNotes] = useState("");
const theme = useTheme();
const mode = theme.palette.mode;
  // fill form when goal loads
  useEffect(() => {
    if (!goal) return;

    setTitle(goal.title);
    setCategory(goal.category);
    setType(goal.type);
    setTarget(goal.target);
    setStartDate(goal.startDate || "");
    setEndDate(goal.endDate || "");
    setColor(goal.color || "#00f10c");
    setNotes(goal.notes || "");
  }, [goal]);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);

    dispatch({
      type: "EDIT_GOAL",
      payload: {
        id: goal.id,
        title,
        category,
        type,
        target: Number(target),
        startDate,
        endDate,
        color,
        notes,
      },
    });

    setSuccess(true);

    setTimeout(() => {
      navigate("/goals");
    }, 1200);
  }

  if (!goal) {
    return (
      <EmptyState
  title={t.goalNotFound}
  description={t.goalNotFoundDesc}
  buttonText={t.back}
  onClick={() => navigate("/goals")}
/>
    );
  }

  return (
    <Card sx={{ maxWidth: 700, mx: "auto", mt: 3 }}>
      <Card
  sx={{
    maxWidth: 700,
    mx: "auto",
    mb: 3,
    borderRadius: 3,
   
    color:"#163314",
    boxShadow: 3,
  }}
>
  <CardContent sx={{
    color: mode === "dark" ? "#fff" : "#163314",
  }}>
    <Typography variant="h4" fontWeight="bold">
        {t.editGoal}
    </Typography>

    <Typography variant="body1" sx={{ mt: 1, opacity: 0.9 }}>
      {t.editGoalDesc}
    </Typography>
  </CardContent>
</Card>
      <CardContent>

        <form onSubmit={handleSubmit}>
          <GoalFormFields
            title={title}
            setTitle={setTitle}
            category={category}
            setCategory={setCategory}
            type={type}
            setType={setType}
            target={target}
            setTarget={setTarget}
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
            color={color}
            setColor={setColor}
            notes={notes}
            setNotes={setNotes}
            categories={categories}
            submitted={submitted}
          />

          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
            {t.saveChanges}
          </Button>
           <Button
    variant="outlined"
    fullWidth
    onClick={() => navigate("/goals")}
  >
    {t.cancel}
  </Button>
        </form>

      </CardContent>

      <Snackbar open={success} autoHideDuration={1200}>
        <Alert severity="success">
         {t.goalCompletedSuccessfully}
        </Alert>
      </Snackbar>

    </Card>
  );
}