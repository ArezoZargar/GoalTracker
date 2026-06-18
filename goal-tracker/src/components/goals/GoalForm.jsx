import {
  Stack,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@mui/material";
import { useLanguage } from "../../context/LanguagesContext";
import en from "../../i18n/en";
import fa from "../../i18n/fa";
export default function GoalFormFields({
  title, setTitle,
  category, setCategory,
  type, setType,
  target, setTarget,
  startDate, setStartDate,
  endDate, setEndDate,
  color, setColor,
   setNotes,
  categories,
  
  errors = {},
 
}) {
  const { language } = useLanguage();
const t = language === "fa" ? fa : en;
  return (
    <Stack spacing={2} >

      <TextField
        label={t.title}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
         error={!!errors?.title}
helperText={errors?.title}
               sx={{
    direction: language === "fa" ? "rtl" : "ltr",
  }}
  InputLabelProps={{
    sx: {
      right: language === "fa" ? 14 : "auto",
      left: language === "fa" ? "auto" : 14,
      transformOrigin: language === "fa" ? "top right" : "top left",
    },
  }}
      />

      <FormControl fullWidth>
       {/* <InputLabel  >{t.category}</InputLabel> */}
<Select value={category} onChange={(e) => setCategory(e.target.value)}>
  {categories.map((cat) => {
    const Icon = cat.icon;

    return (
      <MenuItem key={cat.value} value={cat.value}>
        <Stack direction="row" spacing={1} alignItems="center">
          <Icon sx={{ color: cat.color }} />

          {language === "fa" ? cat.labelFa : cat.labelEn}
        </Stack>
      </MenuItem>
    );
  })}
</Select>
      </FormControl>

      <Select value={type} onChange={(e) => setType(e.target.value)}>
       <MenuItem value="daily">{t.daily}</MenuItem>
<MenuItem value="count">{t.count}</MenuItem>
<MenuItem value="time">{t.time}</MenuItem>
      </Select>

      <TextField
        type="number"
        label={t.target}
        value={target}
        onChange={(e) => setTarget(e.target.value)}
        error={!!errors.target}
  helperText={errors.target}
          sx={{
    direction: language === "fa" ? "rtl" : "ltr",
  }}
  InputLabelProps={{
    sx: {
      right: language === "fa" ? 14 : "auto",
      left: language === "fa" ? "auto" : 14,
      transformOrigin: language === "fa" ? "top right" : "top left",
    },
  }}
      />

      <TextField
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        error={!!errors.startDate}
  helperText={errors.startDate}
        InputLabelProps={{ shrink: true }}
      />

      <TextField
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        error={!!errors.endDate}
  helperText={errors.endDate}
        InputLabelProps={{ shrink: true }}
      />

      <TextField
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />

      <TextField
        
        label={t.notes}
        onChange={(e) => setNotes(e.target.value)}
        multiline
        rows={4}
          sx={{
    direction: language === "fa" ? "rtl" : "ltr",
  }}
  InputLabelProps={{
    sx: {
      right: language === "fa" ? 14 : "auto",
      left: language === "fa" ? "auto" : 14,
      transformOrigin: language === "fa" ? "top right" : "top left",
    },
  }}
      />

    </Stack>
  );
}