import { useGoals } from "../../context/GoalsContext";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  LinearProgress,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useLanguage } from "../../context/LanguagesContext";
import en from "../../i18n/en";
import fa from "../../i18n/fa";
import StatCard from "../../components/dashboard/StatCard";

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
    <Box
      sx={{
        width: "100%",

        py: 2,
      }}
    >
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
              alignItems: { xs: "flex-start", sm: "center" },
              gap: 2,
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
              onClick={() => setOpen(true)}
              sx={{
                alignSelf: { xs: "stretch", sm: "auto" },
              }}
            >
              {t.newCategory}
            </Button>
          </Box>
        </CardContent>
      </Card>

      <Dialog open={open} onClose={() => setOpen(false)} fullWidth>
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
          <Button onClick={() => setOpen(false)}>{t.cancel}</Button>
          <Button variant="contained" onClick={handleAddCategory}>
            {t.add}
          </Button>
        </DialogActions>
      </Dialog>

      <Grid
        container
        spacing={2}
        justifyContent={{ xs: "center", md: "flex-start" }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <StatCard title={t.categories} value={categories.length} />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <StatCard title={t.activeGoals} value={activeGoals.length} />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <StatCard title={t.completed} value={completedGoals.length} />
        </Grid>
      </Grid>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          {t.categories}
        </Typography>

        <Grid
          container
          spacing={2}
          justifyContent={{ xs: "center", md: "flex-start" }}
        >
          {categories.map((category) => {
            const normalize = (s) => (s || "").toLowerCase().trim();

            const categoryGoals = goals.filter(
              (goal) => normalize(goal.category) === normalize(category),
            );

            const active = categoryGoals.filter(
              (g) => g.status === "active",
            ).length;

            const completed = categoryGoals.filter(
              (g) => g.status === "completed",
            ).length;

            const progress =
              categoryGoals.length > 0
                ? Math.min(
                    100,
                    Math.round((completed / categoryGoals.length) * 100),
                  )
                : 0;

            return (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                <Card
                  sx={{
                    width: "100%",
                    maxWidth: 320,
                    height: 140,
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    borderRadius: 2,
                  }}
                >
                  <Typography variant="h6" noWrap>
                    {categoryLabels[category] || category}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mb: 1,
                    }}
                  >
                    <Typography variant="body2" noWrap>
                      {t.active}: {active} | {t.completed}: {completed} /
                    </Typography>

                    <Typography variant="body2">{progress}%</Typography>
                  </Box>

                  <LinearProgress variant="determinate" value={progress} />
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}
