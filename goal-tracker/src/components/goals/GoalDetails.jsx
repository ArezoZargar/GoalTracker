import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Stack,
  Box,
  Button,
  Snackbar,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import LinearProgress from "@mui/material/LinearProgress";
import { Link } from "react-router-dom";
import ConfirmDialog from "../../components/common/ConfirmDialog";
import FeedbackSnackbar from "../../components/common/FeedbackSnackbar";
import { useLanguage } from "../../context/LanguagesContext";
import en from "../../i18n/en";
import fa from "../../i18n/fa";
export default function GoalDetails({ goal, dispatch }) {
  const [animatedProgress, setAnimatedProgress] = useState(0);
  const [successOpen, setSuccessOpen] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [openDelete, setOpenDelete] = useState(false);
  const { language } = useLanguage();
  const t = language === "fa" ? fa : en;
  const theme = useTheme();
  const mode = theme.palette.mode;
  const progressPercent = Math.round((goal.progress / goal.target) * 100);
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
  const typeLabels = {
    daily: t.daily,
    count: t.count,
    time: t.time,
  };
  const buttonStyle = {
    textTransform: "none",
    width: "100%",
    minWidth: 100,
    whiteSpace: "nowrap",
    paddingInline: 2,
    fontSize: {
      xs: "0.8rem",
      sm: "1rem",
    },
    borderRadius: 2,
    fontWeight: "bold",
    transition: "all 0.2s ease",
    bgcolor: mode === "dark" ? "#22c55e" : "#08ad10",
    color: "white",
    "&:hover": {
      transform: "translateY(-3px)",
      boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
    },
  };
  // animation
  useEffect(() => {
    let start = 0;

    const interval = setInterval(() => {
      start += 2;

      if (start >= goal.progress) {
        setAnimatedProgress(goal.progress);
        clearInterval(interval);
      } else {
        setAnimatedProgress(start);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [goal.progress]);

  function handleAddProgress() {
    dispatch({
      type: "ADD_PROGRESS",
      payload: { id: goal.id, amount: 1 },
    });
  }

  function handleComplete() {
    dispatch({ type: "MARK_COMPLETE", payload: goal.id });
    setSuccessMsg("Goal completed 🎉");
    setSuccessOpen(true);
  }

  function handleTogglePause() {
    dispatch({ type: "TOGGLE_PAUSE", payload: goal.id });
  }

  function handleDeleteConfirm() {
    dispatch({ type: "DELETE_GOAL", payload: goal.id });
    setOpenDelete(false);
    setSuccessMsg("Goal deleted 🗑️");
    setSuccessOpen(true);
  }

  return (
    <Box
      sx={{
        direction: language === "fa" ? "rtl" : "ltr",
        textAlign: language === "fa" ? "right" : "left",
      }}
    >
      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Typography
            variant="h4"
            sx={{
              fontSize: {
                xs: "1.5rem",
                sm: "2rem",
              },
            }}
          >
            {goal.title}
          </Typography>
          <Typography color="text.secondary">
            {categoryLabels[goal.category]} • {typeLabels[goal.type]}
          </Typography>
          <Typography>
            {t.status}: {statusLabels[goal.status]}
          </Typography>
        </CardContent>
      </Card>

      <Card
        sx={{
          mb: 3,
          borderRadius: 4,
        }}
      >
        <CardContent>
          <Typography mb={1} variant="h5" fontWeight="bold">
            {t.keepGoing}
          </Typography>
          <Typography variant="h6" mb={2}>
            {t.progress} :
          </Typography>

          <Typography dir="ltr" sx={{ display: "inline-block" }}>
            {goal.progress} / {goal.target} ({progressPercent}%)
          </Typography>

          <LinearProgress
            variant="determinate"
            value={(animatedProgress / goal.target) * 100}
          />
        </CardContent>
      </Card>

      <Box
        sx={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 2 }}
      >
        <Card>
          <CardContent>
            <Typography
              sx={{
                fontSize: { xs: "0.75rem", sm: "0.9rem" },
                color: "text.secondary",
              }}
            >
              {t.created}
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
                fontWeight: "bold",
              }}
            >
              {goal.target}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "0.75rem", sm: "0.9rem" },
              }}
            >
              {new Date(goal.createdAt).toLocaleDateString()}
            </Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography color="text.secondary">{t.target}</Typography>
            <Typography variant="h5">{goal.target}</Typography>
          </CardContent>
        </Card>
      </Box>

      <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ my: 2 }}>
        <Button
          sx={{
            buttonStyle,
          }}
          onClick={handleAddProgress}
        >
          {t.addProgress}
        </Button>
        <Button
          sx={{
            buttonStyle,
          }}
          onClick={handleComplete}
        >
          {t.complete}
        </Button>
        <Button
          sx={{
            buttonStyle,
          }}
          onClick={handleTogglePause}
        >
          {goal.status === "paused" ? t.resume : t.pause}
        </Button>

        <Button
          sx={{
            buttonStyle,
          }}
          component={Link}
          to={`/goals/edit/${goal.id}`}
        >
          {t.edit}
        </Button>

        <Button
          sx={{
            buttonStyle,
          }}
          color="error"
          onClick={() => setOpenDelete(true)}
        >
          {t.delete}
        </Button>
      </Stack>

      <Card>
        <CardContent>
          <Typography variant="h6">{t.history}</Typography>

          {goal.logs.map((log) => (
            <Box
              key={log.date}
              sx={{
                px: 2,
                borderInlineStart: "3px solid",
                my: 1,
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "0.75rem", sm: "0.95rem" },
                  fontWeight: 500,
                }}
              >
                +{log.amount}
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "0.75rem", sm: "0.95rem" },
                }}
              >
                {t.progress}:{" "}
                <Box
                  component="span"
                  dir="ltr"
                  sx={{
                    fontSize: { xs: "0.75rem", sm: "0.95rem" },
                  }}
                >
                  {goal.progress} / {goal.target} ({progressPercent}%)
                </Box>
              </Typography>
            </Box>
          ))}
        </CardContent>
      </Card>

      <ConfirmDialog
        open={openDelete}
        onClose={() => setOpenDelete(false)}
        onConfirm={handleDeleteConfirm}
      />
      <FeedbackSnackbar
        open={successOpen}
        message={successMsg}
        onClose={() => setSuccessOpen(false)}
      />
    </Box>
  );
}
