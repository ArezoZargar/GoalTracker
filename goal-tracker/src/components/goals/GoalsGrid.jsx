import { Box } from "@mui/material";
import GoalCard from "./GoalCard";

export default function GoalsGrid({ goals }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
        
      }}
    >
      {goals.map((goal) => (
        <Box
          key={goal.id}
          sx={{
            flex: "1 1 300px", 
            maxWidth: "350px",
          }}
        >
          <GoalCard goal={goal} />
        </Box>
      ))}
    </Box>
  );
}