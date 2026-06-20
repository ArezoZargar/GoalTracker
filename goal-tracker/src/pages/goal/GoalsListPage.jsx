import { useState } from "react";
import { useGoals } from "../../context/GoalsContext";

import {
  Typography,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Stack,
} from "@mui/material";
import GoalsResults from "../../components/goals/GoalsResults";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { useSearchParams } from "react-router-dom";
import InputAdornment from "@mui/material/InputAdornment";
import GoalsHeader from "../../components/goals/GoalsHeader";
import GoalsFilters from "../../components/goals/GoalsFilters";
export default function GoalsListPage() {
  const navigate = useNavigate();
  const [categoryFilter, setCategoryFilter] = useState("");
  const [search, setSearch] = useState("");

  const [sortBy, setSortBy] = useState("newest");
  const [params] = useSearchParams();
  const { state } = useGoals();
  const goals = state.goals;

  const defaultFilter = params.get("filter") || "all";

  const [filter, setFilter] = useState(defaultFilter);

  const filteredGoals = goals.filter((goal) => {
    const matchesSearch = goal.title
      .toLowerCase()
      .includes(search.toLowerCase());

    if (!matchesSearch) return false;

    if (categoryFilter && goal.category !== categoryFilter) {
      return false;
    }

    if (filter === "active") return goal.status === "active";

    if (filter === "completed") return goal.status === "completed";

    if (filter === "paused") return goal.status === "paused";

    return true;
  });

  const sortedGoals = [...filteredGoals];

  if (sortBy === "progress") {
    sortedGoals.sort((a, b) => b.progress / b.target - a.progress / a.target);
  }

  if (sortBy === "category") {
    sortedGoals.sort((a, b) => a.category.localeCompare(b.category));
  }

  if (sortBy === "newest") {
    sortedGoals.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }

  return (
    <div>
      <GoalsHeader onCreate={() => navigate("/goals/new")} />

      <GoalsFilters
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      <GoalsResults
        goals={goals}
        sortedGoals={sortedGoals}
        categoryFilter={categoryFilter}
        navigate={navigate}
      />
    </div>
  );
}
