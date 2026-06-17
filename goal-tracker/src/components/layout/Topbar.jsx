import {
  AppBar,
  Toolbar,
  Typography,
} from "@mui/material";

function Topbar() {
  return (
    <AppBar
      position="fixed"
      sx={{
        background: "#111827",
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          fontWeight="bold"
        >
          Goal Tracker Pro
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Topbar;