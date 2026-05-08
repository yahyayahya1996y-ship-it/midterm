import MenuIcon from "@mui/icons-material/Menu";

type NavbarProps = {
  onMenuClick: () => void;
};

function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <nav className="h-16 bg-blue-600 text-white flex items-center px-4 shadow-md">
      <button onClick={onMenuClick} className="mr-4">
        <MenuIcon />
      </button>

      <h1 className="text-xl font-bold">My Dashboard</h1>
    </nav>
  );
}

export default Navbar;