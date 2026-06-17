import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function Layout({ children }) {
  return (
    <div className="app-layout">
      <Sidebar />

      <div className="content">
        <Topbar />
        {children}
      </div>
    </div>
  );
}

export default Layout;