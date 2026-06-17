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
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        {title || t.areYouSure}
      </DialogTitle>

      <DialogContent>
        <Typography variant="body2" color="text.secondary">
          {description || t.actionCannotUndo}
        </Typography>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>
          {cancelText || t.cancel}
        </Button>

        <Button
          onClick={onConfirm}
          color={color}
          variant="contained"
        >
          {confirmText || t.delete}
        </Button>
      </DialogActions>
    </Dialog>
  );
}