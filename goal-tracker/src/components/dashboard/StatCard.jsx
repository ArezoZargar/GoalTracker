import { Card, CardContent, Typography, Box } from "@mui/material";

export default function StatCard({ title, value, icon }) {
  return (
  <Card
  sx={{
    width: {
      xs: 150,
      sm: 160,
      md: 180,
    },

    minHeight: {
      xs: 90,
      sm: 100,
    },

    borderRadius: {
      xs: 3,
      md: 4,
    },

    display: "flex",
    alignItems: "center",

    transition: "all 0.3s ease",
    cursor: "pointer",

    "&:hover": {
      transform: "translateY(-6px) scale(1.02)",
      boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
      backgroundColor: "primary.light",
      color: "white",
    },
  }}
>
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box
  sx={{
    fontSize: {
      xs: 20,
      sm: 24,
      md: 28,
    },
  }}
>
  {icon}
</Box>

          <Box>
            <Typography
  sx={{
    opacity: 0.7,
    fontSize: {
      xs: "0.75rem",
      sm: "0.85rem",
      md: "0.95rem",
    },
  }}
>
  {title}
</Typography>
           <Typography
  fontWeight="bold"
  sx={{
    fontSize: {
      xs: "1rem",
      sm: "1.1rem",
      md: "1.3rem",
    },
  }}
>
              {value}
            </Typography>
            
          </Box>
          
        </Box>
      </CardContent>
    </Card>
  );
}