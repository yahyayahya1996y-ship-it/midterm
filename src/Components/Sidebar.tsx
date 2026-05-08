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
          <li className="flex items-center gap-3">
            <DashboardIcon />
            <span>Dashboard</span>
          </li>

          <li className="flex items-center gap-3">
            <PersonIcon />
            <span>Profile</span>
          </li>

          <li className="flex items-center gap-3">
            <SettingsIcon />
            <span>Settings</span>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;