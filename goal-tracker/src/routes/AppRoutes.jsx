import { Routes, Route } from "react-router-dom";
import DashboardPage from "../pages/dashboard/DashboardPage";
import GoalsListPage from "../pages/goal/GoalsListPage";
import NotFoundPage from "../pages/not found/NotFoundPage";
import CreateGoalPage from "../pages/createGoal/CreateGoalPage";
import AppShell from "../components/layout/AppShell";
import GoalDetailsPage from "../pages/goal/GoalDetailsPage";
import EditGoalPage from "../pages/createGoal/EditGoalPage";
import CategoriesPage from "../pages/category/CategoriesPage";
import SettingsPage from "../pages/setting/Settings";
import LoadingState from "../components/common/LoadingState";
import { useGoals } from "../context/GoalsContext";
export default function AppRoutes() {
  const { state } = useGoals();
  if (state.loading) {
    return <LoadingState />;
  }
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/goals" element={<GoalsListPage />} />
        <Route path="/create" element={<CreateGoalPage />} />
        <Route path="/goals/edit/:id" element={<EditGoalPage />} />
        <Route path="/goals/:id" element={<GoalDetailsPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
