import SchoolIcon from "@mui/icons-material/School";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import FitnessCenterRoundedIcon from "@mui/icons-material/FitnessCenterRounded";
import PsychologyRoundedIcon from "@mui/icons-material/PsychologyRounded";

const categories = [
  {
    value: "Study",
    icon: SchoolIcon,
    color: "#3B82F6", // Blue
  },

  {
    value: "Work",
    icon: WorkRoundedIcon,
    color: "#F59E0B", // Amber
  },

  {
    value: "Health",
    icon: FavoriteRoundedIcon,
    color: "#EF4444", // Red
  },

  {
    value: "Fitness",
    icon: FitnessCenterRoundedIcon,
    color: "#22C55E", // Green
  },

  {
    value: "Personal",
    icon: PsychologyRoundedIcon,
    color: "#A855F7", // Purple
  },
];

export default categories;