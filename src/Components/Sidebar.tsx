import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";

type SidebarProps = {
  isOpen: boolean;
};

function Sidebar({ isOpen }: SidebarProps) {
  return (
    <aside
      className={`bg-gray-900 text-white h-screen transition-all duration-300 ${
        isOpen ? "w-64" : "w-0"
      } overflow-hidden`}
    >
      <div className="p-4">
        <h2 className="text-lg font-bold mb-6">Menu</h2>

        <ul className="space-y-4">
          <li>
            <Link to="/main" className="flex items-center gap-3 hover:text-blue-400">
              <DashboardIcon />
              <span>Dashboard</span>
            </Link>
          </li>

          <li>
            <Link to="/profile" className="flex items-center gap-3 hover:text-blue-400">
              <PersonIcon />
              <span>Profile</span>
            </Link>
          </li>

          <li>
            <Link to="/settings" className="flex items-center gap-3 hover:text-blue-400">
              <SettingsIcon />
              <span>Settings</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;