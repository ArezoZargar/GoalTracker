import MainLayout from "../components/layout/MainLayout";

import {
  Container,
  Grid,
  Paper,
  Typography,
  Button,
  Stack,
} from "@mui/material";

import { Link } from "react-router-dom";

import GoalCard from "../components/goals/GoalCard";
import { useGoals } from "../context/GoalContext";

function Dashboard() {
  const { goals } = useGoals();

  const completed = goals.filter(
    (goal) => goal.status === "completed"
  );

  const active = goals.filter(
    (goal) => goal.status === "active"
  );

  const totalXP = goals.reduce(
    (sum, goal) => sum + (goal.xp || 0),
    0
  );

  return (
    <MainLayout>
      <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography
        variant="h3"
        fontWeight="bold"
        mb={3}
      >
        Goal Dashboard
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6">
              Total Goals
            </Typography>

            <Typography variant="h3">
              {goals.length}
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={3}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6">
              Completed
            </Typography>

            <Typography variant="h3">
              {completed.length}
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={3}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6">
              XP Points
            </Typography>

            <Typography variant="h3">
              {totalXP}
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={3}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6">
              Streak
            </Typography>

            <Typography variant="h3">
              12
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Stack
        direction="row"
        spacing={2}
        mt={4}
        mb={4}
      >
        <Button
          component={Link}
          to="/goals/new"
          variant="contained"
        >
          New Goal
        </Button>

        <Button
          component={Link}
          to="/goals"
          variant="outlined"
        >
          View Goals
        </Button>
      </Stack>

      <Typography
        variant="h5"
        mb={3}
      >
        Active Goals
      </Typography>

      <Grid container spacing={3}>
        {active.map((goal) => (
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
            key={goal.id}
          >
            <GoalCard goal={goal} />
          </Grid>
        ))}
      </Grid>
    </Container>
    </MainLayout>
  );
}

export default Dashboard;