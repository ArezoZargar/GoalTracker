import SchoolIcon from "@mui/icons-material/School";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import FitnessCenterRoundedIcon from "@mui/icons-material/FitnessCenterRounded";
import PsychologyRoundedIcon from "@mui/icons-material/PsychologyRounded";

const categories = [
  {
    value: "Study",
    icon: SchoolIcon,
    labelEn: "Study",
    labelFa: "مطالعه",
    color: "#3B82F6",
  },

  {
    value: "Work",
    labelEn: "Work",
    labelFa: "کار",
    icon: WorkRoundedIcon,
    color: "#F59E0B",
  },

  {
    value: "Health",
    labelEn: "Health",
    labelFa: "سلامتی",
    icon: FavoriteRoundedIcon,
    color: "#EF4444",
  },

  {
    value: "Fitness",
    labelEn: "Fitness",
    labelFa: "تناسب اندام",
    icon: FitnessCenterRoundedIcon,
    color: "#22C55E",
  },

  {
    value: "Personal",
    labelEn: "Personal",
    labelFa: "شخصی",
    icon: PsychologyRoundedIcon,
    color: "#A855F7",
  },
];

export default categories;
