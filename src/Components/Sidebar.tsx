import { NavLink } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";

type SidebarProps = {
  isOpen: boolean;
};

function Sidebar({ isOpen }: SidebarProps) {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 p-2 rounded ${
      isActive ? "bg-blue-600 text-white" : "hover:bg-gray-700"
    }`;

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
            <NavLink to="/main" className={linkClass}>
              <DashboardIcon />
              <span>Dashboard</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/profile" className={linkClass}>
              <PersonIcon />
              <span>Profile</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/settings" className={linkClass}>
              <SettingsIcon />
              <span>Settings</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;