import { Snackbar, Alert } from "@mui/material";

export default function FeedbackSnackbar({
  open,
  message,
  onClose,
  severity = "success",
}) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      sx={{
        "& .MuiPaper-root": {
          mb: { xs: 2, sm: 3 },
        },
      }}
    >
      <Alert
        onClose={onClose}
        severity={severity}
        variant="filled"
        sx={{
          width: { xs: "90%", sm: "100%" },
          fontSize: { xs: "0.85rem", sm: "0.95rem" },
        }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}
