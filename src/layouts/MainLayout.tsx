import { useState } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import FooterBar from "@/components/FooterBar";

type MainLayoutProps = {
  children: React.ReactNode;
};

function MainLayout({ children }: MainLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleMenuClick = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onMenuClick={handleMenuClick} />

      <div className="flex flex-1">
        {sidebarOpen && <Sidebar isOpen={sidebarOpen} />}

        <main className="flex-1 bg-gray-100 p-6 overflow-auto">
          {children}
        </main>
      </div>

      <FooterBar />
    </div>
  );
}

export default MainLayout;