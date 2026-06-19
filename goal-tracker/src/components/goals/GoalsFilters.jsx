import {
  Stack,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  InputAdornment,
  Box,
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
    <Box sx={{ width: "100%", mb: 3 }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={2}
        sx={{
          alignItems: {
            xs: "stretch",
            md: "center",
          },
        }}
      >
        <TextField
          fullWidth
          size="small"
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

        <FormControl fullWidth size="small">
          <InputLabel>{t.status}</InputLabel>
          <Select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <MenuItem value="all">{t.all}</MenuItem>
            <MenuItem value="active">{t.active}</MenuItem>
            <MenuItem value="completed">{t.completed}</MenuItem>
            <MenuItem value="paused">{t.paused}</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth size="small">
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

        <FormControl fullWidth size="small">
          <InputLabel>{t.sort}</InputLabel>
          <Select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <MenuItem value="newest">{t.newest}</MenuItem>
            <MenuItem value="progress">{t.progress}</MenuItem>
            <MenuItem value="category">{t.category}</MenuItem>
          </Select>
        </FormControl>
      </Stack>
    </Box>
  );
}
