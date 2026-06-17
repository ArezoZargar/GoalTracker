import { useState } from "react";
import { useGoals } from "../../context/GoalsContext";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, Button, Snackbar, Alert } from "@mui/material";
import categories from "../../data/categories";
import GoalFormFields from "../../components/goals/GoalForm";

import {  Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { useLanguage } from "../../context/LanguagesContext";
import en from "../../i18n/en";
import fa from "../../i18n/fa";
export default function CreateGoal() {
     const { language } = useLanguage();
  const t = language === "fa" ? fa : en;
  const { dispatch } = useGoals();
  const navigate = useNavigate();
const theme = useTheme();
const isDark = theme.palette.mode === "dark";
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Study");
  const [type, setType] = useState("daily");
  const [target, setTarget] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [color, setColor] = useState("#00ff00");
  const [notes, setNotes] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [open, setOpen] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);

    if (!title || !target) return;

    dispatch({
      type: "ADD_GOAL",
      payload: {
        id: Date.now(),
        title,
        category,
        type,
        target: Number(target),
        progress: 0,
        status: "active",
        startDate,
        endDate,
        color,
        notes,
        logs: [],
        createdAt: Date.now(),
      },
    });

    setOpen(true);

    setTimeout(() => {
      navigate("/goals");
    }, 1200);
  }

  return (
    
    <Card sx={{ maxWidth: 700, mx: "auto", mt: 3 }}>
      <Card
  sx={{
    maxWidth: 700,
    mx: "auto",
    mb: 3,
    borderRadius: 3,
   
    color: "#163314",
    boxShadow: 3,
  }}
>
  <CardContent>
    <Typography variant="h4" fontWeight="bold"  sx={{ color: isDark ? "#fff" : "#000" }}>
      {t.createNewGoal}
    </Typography>

    <Typography variant="body1" sx={{ mt: 1, opacity: 0.9 , color: isDark ? "#fff" : "#555",}}>
     {t.createGoalDescription}
    </Typography>
  </CardContent>
</Card>
 <Card sx={{ maxWidth: 700, mx: "auto", mt: 3 }}>
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
            {t.createGoal}
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

      <Snackbar open={open} autoHideDuration={1200}>
        <Alert severity="success">{t.goalCreated}</Alert>
      </Snackbar>
      </Card>
    </Card>
  );
}