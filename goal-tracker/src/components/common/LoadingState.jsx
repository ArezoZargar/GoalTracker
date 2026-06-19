import { Box, CircularProgress, Typography } from "@mui/material";

export default function LoadingState({ text = "Loading..." }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        py: 6,
        gap: 2,
      }}
    >
      <CircularProgress />
      <Typography variant="body2" color="text.secondary">
        {text}
      </Typography>
    </Box>
  );
}
