import {
  Stack,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from "@mui/material";
import { useLanguage } from "../../context/LanguagesContext";
import en from "../../i18n/en";
import fa from "../../i18n/fa";

export default function GoalFormFields({
  title,
  setTitle,
  category,
  setCategory,
  type,
  setType,
  target,
  setTarget,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  color,
  setColor,
  setNotes,
  categories,
  errors = {},
}) {
  const { language } = useLanguage();
  const t = language === "fa" ? fa : en;
  const isRTL = language === "fa";

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <TextField
        label={t.title}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        error={!!errors?.title}
        helperText={errors?.title}
        sx={{ direction: isRTL ? "rtl" : "ltr" }}
      />

      <FormControl fullWidth>
        <InputLabel>{t.category}</InputLabel>
        <Select
          value={category}
          label={t.category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat) => {
            const Icon = cat.icon;

            return (
              <MenuItem key={cat.value} value={cat.value}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Icon sx={{ color: cat.color }} />
                  {isRTL ? cat.labelFa : cat.labelEn}
                </Box>
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel>{t.type}</InputLabel>
        <Select
          value={type}
          label={t.type}
          onChange={(e) => setType(e.target.value)}
        >
          <MenuItem value="daily">{t.daily}</MenuItem>
          <MenuItem value="count">{t.count}</MenuItem>
          <MenuItem value="time">{t.time}</MenuItem>
        </Select>
      </FormControl>

      <TextField
        type="number"
        label={t.target}
        value={target}
        onChange={(e) => setTarget(e.target.value)}
        fullWidth
        error={!!errors?.target}
        helperText={errors?.target}
      />

      <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
        <TextField
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          fullWidth
          InputLabelProps={{ shrink: true }}
          error={!!errors?.startDate}
          helperText={errors?.startDate}
        />

        <TextField
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          fullWidth
          InputLabelProps={{ shrink: true }}
          error={!!errors?.endDate}
          helperText={errors?.endDate}
        />
      </Stack>

      <TextField
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        fullWidth
      />

      <TextField
        label={t.notes}
        onChange={(e) => setNotes(e.target.value)}
        multiline
        rows={4}
        fullWidth
      />
    </Stack>
  );
}
