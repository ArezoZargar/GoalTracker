import {
  Stack,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useLanguage } from "../../context/LanguagesContext";
import en from "../../i18n/en";
import fa from "../../i18n/fa";
export default function GoalsFilters({
  search,
  setSearch,
  filter,
  setFilter,
  categoryFilter,
  setCategoryFilter,
  sortBy,
  setSortBy,
}) {
  const { language } = useLanguage();
const t = language === "fa" ? fa : en;
  return (
    <Stack direction={{ xs: "column", md: "row" }} spacing={2} sx={{ mb: 3 }}>
     {/* SEARCH */}
      <TextField
        fullWidth
        label={t.searchGoals}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />

      {/* STATUS */}
      <FormControl fullWidth>
        <InputLabel>{t.status}</InputLabel>
        <Select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <MenuItem value="all">{t.all}</MenuItem>
          <MenuItem value="active">{t.active}</MenuItem>
          <MenuItem value="completed">{t.completed}</MenuItem>
          <MenuItem value="paused">{t.paused}</MenuItem>
        </Select>
      </FormControl>

      {/* CATEGORY */}
      <FormControl fullWidth>
        <InputLabel>{t.category}</InputLabel>
        <Select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <MenuItem value="">{t.allCategories}</MenuItem>
          <MenuItem value="Study">{t.study}</MenuItem>
          <MenuItem value="Work">{t.work}</MenuItem>
          <MenuItem value="Health">{t.health}</MenuItem>
          <MenuItem value="Personal">{t.personal}</MenuItem>
        </Select>
      </FormControl>

      {/* SORT */}
      <FormControl fullWidth>
        <InputLabel>{t.sort}</InputLabel>
        <Select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <MenuItem value="newest">{t.newest}</MenuItem>
          <MenuItem value="progress">{t.progress}</MenuItem>
          <MenuItem value="category">{t.category}</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  );
}