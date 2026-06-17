import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";

import { Link } from "react-router-dom";

const drawerWidth = 240;

const menuItems = [
  { title: "Dashboard", path: "/" },
  { title: "Goals", path: "/goals" },
  { title: "Categories", path: "/categories" },
  { title: "Archive", path: "/archive" },
  { title: "Settings", path: "/settings" },
];

function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,

        "& .MuiDrawer-paper": {
          width: drawerWidth,
          background: "#0f172a",
          color: "white",
        },
      }}
    >
      <Toolbar />

      <List>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.path}
            component={Link}
            to={item.path}
          >
            <ListItemText primary={item.title} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
}

export default Sidebar;