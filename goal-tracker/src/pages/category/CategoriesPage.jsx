import { useGoals } from "../../context/GoalsContext";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  LinearProgress,
} from "@mui/material";
import StatCard from "../../components/dashboard/StatCard";
import { Button } from "@mui/material";
import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import { useLanguage } from "../../context/LanguagesContext";
import en from "../../i18n/en";
import fa from "../../i18n/fa";


export default function CategoriesPage() {
  const { state } = useGoals();
  const goals = state?.goals || [];
  const activeGoals = goals.filter((g) => g.status === "active");
  const completedGoals = goals.filter((g) => g.status === "completed");
  const [categories, setCategories] = useState([
    "Study",
    "Health",
    "Work",
    "Personal",
  ]);
  const { language } = useLanguage();
const t = language === "fa" ? fa : en;

const categoryLabels = {
  Study: t.study,
  Work: t.work,
  Health: t.health,
  Personal: t.personal,
};
  const [open, setOpen] = useState(false);
  const [newCategory, setNewCategory] = useState("");
  const handleAddCategory = () => {
    if (!newCategory.trim()) return;

    setCategories([...categories, newCategory]);

    setNewCategory("");
    setOpen(false);
  };
  return (
    <div style={{ padding: 20 }}>
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography variant="h4" fontWeight="bold">
                {t.categories}
              </Typography>
              <Typography color="text.secondary">
              {t.categoriesDescription}
              </Typography>
            </Box>

            <Button
              variant="contained"
              color="primary"
              onClick={() => setOpen(true)}
            >
              {t.newCategory}
            </Button>
          </Box>
        </CardContent>
      </Card>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>{t.addCategory}</DialogTitle>


<DialogContent>
  <TextField
    autoFocus
    margin="dense"
    label={t.categoryName}
    fullWidth
    value={newCategory}
    onChange={(e) => setNewCategory(e.target.value)}
  />
</DialogContent>

<DialogActions>
  <Button onClick={() => setOpen(false)}>
    {t.cancel}
  </Button>

  <Button variant="contained" onClick={handleAddCategory}>
    {t.add}
  </Button>
</DialogActions>
      </Dialog>

      {/* STATS */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          

          <StatCard title={t.categories} value={categories.length} />
          
          
        </Grid>

        <Grid item xs={12} md={3}>
          <StatCard title={t.activeGoals} value={activeGoals.length} />
</Grid>
        <Grid item xs={12} md={3}>
         <StatCard title={t.completed} value={completedGoals.length} />
        </Grid>
      </Grid>
      <Box sx={{ mt: 4 }}>
       <Typography variant="h6" sx={{ mb: 2 }}>
  {t.categories}
</Typography>

        {categories.map((category) => {
          const categoryGoals = goals.filter(
            (goal) => goal.category === category,
          );

          const categoryActive = categoryGoals.filter(
            (g) => g.status === "active",
          ).length;

          const categoryCompleted = categoryGoals.filter(
            (g) => g.status === "completed",
          ).length;

          const progress =
            categoryGoals.length > 0
              ? Math.round((categoryCompleted / categoryGoals.length) * 100)
              : 0;

          return (
            <Card key={category} sx={{ mb: 2, p: 2, height: 120, width: "100%" }}>
           <Typography variant="h6">
  {categoryLabels[category]}
</Typography>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
              >
               <Typography variant="body2">
  {t.active}: {categoryActive} | {t.completed}: {categoryCompleted}
</Typography>

               <Typography variant="body2">
  {progress}%
</Typography>
              </Box>

              <LinearProgress variant="determinate" value={progress} />
            </Card>
          );
        })}
      </Box>
    </div>
  );
}
