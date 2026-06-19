import { useGoals } from "../../context/GoalsContext";
import { Link as RouterLink } from "react-router-dom";
import LoadingState from "../common/LoadingState";
import EmptyState from "../common/EmptyState";
import { Snackbar, Alert } from "@mui/material";
import { Box } from "@mui/material";
import { useState } from "react";
import ConfirmDialog from "../common/ConfirmDialog";

import { useLanguage } from "../../context/LanguagesContext";
import en from "../../i18n/en";
import fa from "../../i18n/fa";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Stack,
  LinearProgress,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

export default function GoalCard({ goal }) {
  const { language } = useLanguage();
  const t = language === "fa" ? fa : en;
  const { dispatch } = useGoals();
  const [showSuccess, setShowSuccess] = useState(false);
  const progressPercent =
    goal.target > 0 ? Math.round((goal.progress / goal.target) * 100) : 0;
  const [openDelete, setOpenDelete] = useState(false);
  const categoryColor = {
    Study: "#3B82F6",
    Work: "#F59E0B",
    Health: "#EF4444",
    Fitness: "#10B981",
    Personal: "#8B5CF6",
  };
  const categoryLabels = {
    Study: t.study,
    Work: t.work,
    Health: t.health,
    Fitness: t.fitness,
    Personal: t.personal,
  };

  const statusLabels = {
    active: t.activeStatus,
    paused: t.pausedStatus,
    completed: t.completedStatus,
  };
  const cardColor = categoryColor[goal.category] || "#24b910";
  const buttonStyle = {
    borderRadius: 2,
    fontWeight: "bold",
    textTransform: "none",

    minWidth: {
      xs: "100%",
      sm: "5rem",
    },

    height: {
      xs: 36,
      md: 30,
    },

    fontSize: {
      xs: "0.75rem",
      md: "0.85rem",
    },

    transition: "all .2s ease",

    "&:hover": {
      transform: "translateY(-2px)",
    },
  };
  function handleDelete() {
    dispatch({
      type: "DELETE_GOAL",
      payload: goal.id,
    });

    setOpenDelete(false);
  }
  return (
    <Card
      sx={{
        mb: 2,

        overflow: "hidden",

        border: "1px solid",
        borderColor: "divider",
        borderLeft: `6px solid ${cardColor}`,
        transition: "all .3s ease",
        width: "100%",

        borderRadius: {
          xs: 3,
          md: 4,
        },
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: 6,
          borderLeft: `6px solid ${cardColor}`,
        },
      }}
    >
      <CardContent
        sx={{
          direction: language === "fa" ? "rtl" : "ltr",
          textAlign: language === "fa" ? "right" : "left",
        }}
      >
        <Typography
          fontWeight="bold"
          gutterBottom
          sx={{
            fontSize: {
              xs: "1.1rem",
              sm: "1.3rem",
              md: "1.5rem",
            },
          }}
        >
          {goal.title}
        </Typography>

        <Stack direction="row" spacing={1} mb={2} flexWrap="wrap" useFlexGap>
          <Chip
            label={categoryLabels[goal.category]}
            color="success"
            sx={{
              bgcolor: cardColor,
              color: "#fff",
              fontWeight: "bold",
              direction: language === "fa" ? "rtl" : "ltr",
            }}
          />

          <Chip
            label={statusLabels[goal.status]}
            color={
              goal.status === "completed"
                ? "success"
                : goal.status === "paused"
                  ? "warning"
                  : "primary"
            }
          />
        </Stack>

        <Typography variant="body2">
          {t.target}: {goal.progress}/{goal.target}
        </Typography>

        <Typography variant="body2" sx={{ mt: 1 }}>
          {t.progress}: {progressPercent}%
        </Typography>

        <LinearProgress
          variant="determinate"
          value={progressPercent}
          sx={{
            height: {
              xs: 8,
              md: 10,
            },
            borderRadius: 5,
            mb: 2,
          }}
        />

        <Box
          sx={{
            mt: 2,
            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2,1fr)",
              md: "repeat(3,auto)",
            },

            gap: 1,
          }}
        >
          <Button
            sx={buttonStyle}
            size="small"
            variant="outlined"
            disabled={goal.status === "completed"}
            onClick={() =>
              dispatch({
                type: "ADD_PROGRESS",
                payload: {
                  id: goal.id,
                  amount: 1,
                },
              })
            }
          >
            {t.addProgress}
          </Button>

          <Button
            sx={buttonStyle}
            size="small"
            component={RouterLink}
            to={`/goals/${goal.id}`}
            variant="outlined"
          >
            {t.details}
          </Button>

          <Button
            sx={buttonStyle}
            size="small"
            variant="outlined"
            disabled={goal.status === "completed"}
            onClick={() =>
              dispatch({
                type: "TOGGLE_PAUSE",
                payload: goal.id,
              })
            }
          >
            {goal.status === "paused" ? t.resume : t.pause}
          </Button>

          <Button
            sx={buttonStyle}
            size="small"
            variant="outlined"
            disabled={goal.status === "completed"}
            onClick={() => {
              dispatch({
                type: "MARK_COMPLETE",
                payload: goal.id,
              });

              setShowSuccess(true);

              setTimeout(() => {
                setShowSuccess(false);
              }, 1500);
            }}
          >
            {t.complete}
          </Button>

          <Button
            sx={buttonStyle}
            size="small"
            variant="outlined"
            component={RouterLink}
            to={`/goals/edit/${goal.id}`}
            disabled={goal.status === "completed"}
          >
            {t.edit}
          </Button>

          <>
            <Button
              sx={buttonStyle}
              variant="outlined"
              onClick={() => setOpenDelete(true)}
            >
              {t.delete}
            </Button>

            <ConfirmDialog
              open={openDelete}
              onClose={() => setOpenDelete(false)}
              onConfirm={handleDelete}
            />
          </>
        </Box>
      </CardContent>
      <Snackbar
        open={showSuccess}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          severity="success"
          sx={{
            fontSize: "16px",
            fontWeight: "bold",
            animation: "pop 0.4s ease",
          }}
        >
          {t.goalCompletedSuccessfully}
        </Alert>
      </Snackbar>
    </Card>
  );
}
