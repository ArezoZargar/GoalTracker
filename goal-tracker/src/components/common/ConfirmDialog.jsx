import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";
import { useLanguage } from "../../context/LanguagesContext";
import en from "../../i18n/en";
import fa from "../../i18n/fa";

export default function ConfirmDialog({
  open,
  title,
  description,
  onClose,
  onConfirm,
  confirmText,
  cancelText,
  color = "error",
}) {
  const { language } = useLanguage();
  const t = language === "fa" ? fa : en;

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
      <DialogTitle
        sx={{
          fontSize: { xs: "1rem", sm: "1.25rem" },
          textAlign: "center",
        }}
      >
        {title || t.areYouSure}
      </DialogTitle>

      <DialogContent
        sx={{
          px: { xs: 2, sm: 3 },
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontSize: { xs: "0.8rem", sm: "0.95rem" },
            textAlign: "center",
          }}
        >
          {description || t.actionCannotUndo}
        </Typography>
      </DialogContent>

      <DialogActions
        sx={{
          flexDirection: { xs: "column", sm: "row" },
          gap: 1,
          p: 2,
        }}
      >
        <Button onClick={onClose} fullWidth>
          {cancelText || t.cancel}
        </Button>

        <Button onClick={onConfirm} color={color} variant="contained" fullWidth>
          {confirmText || t.delete}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
