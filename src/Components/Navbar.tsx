import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

type NavbarProps = {
  onMenuClick: () => void;
};

function Navbar({ onMenuClick }: NavbarProps) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <nav className="h-16 bg-blue-600 text-white flex items-center justify-between px-4 shadow-md">
      <div className="flex items-center">
        <button onClick={onMenuClick} className="mr-4">
          <MenuIcon />
        </button>

        <h1 className="text-xl font-bold">My Dashboard</h1>
      </div>

      <button
        onClick={handleLogout}
        className="flex items-center gap-2 bg-red-500 px-4 py-2 rounded hover:bg-red-600"
      >
        <LogoutIcon />
        Logout
      </button>
    </nav>
  );
}

export default Navbar;