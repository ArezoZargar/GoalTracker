import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Goal Tracker</h2>

      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/goals">Goals</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/settings">Settings</Link>
      </nav>
    </aside>
  );
}

export default Sidebar;