import { Card, CardContent, Typography, Box } from "@mui/material";

export default function StatCard({ title, value, icon }) {
  return (
    <Card
      sx={{
        width: 138,
        borderRadius: 3,
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
          <Box sx={{ fontSize: 25 }}>{icon}</Box>

          <Box>
            <Typography variant="body2" sx={{ opacity: 0.7 }}>
              {title}
            </Typography>

            <Typography variant="h6" fontWeight="bold">
              {value}
            </Typography>
            
          </Box>
          
        </Box>
      </CardContent>
    </Card>
  );
}