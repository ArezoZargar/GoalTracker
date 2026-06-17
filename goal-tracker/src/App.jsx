import AppRoutes from "./routes/AppRoutes";
import { useLanguage } from "./context/LanguagesContext";

export default function App() {

  const { language } = useLanguage();

return (
  <div
    dir={
      language === "fa"
        ? "rtl"
        : "ltr"
    }
  >
    <AppRoutes />
  </div>
);;
}