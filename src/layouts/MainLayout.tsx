type MainLayoutProps = {
  children: React.ReactNode;
};

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div>
      <nav>
        <h2>Main Navbar</h2>
      </nav>

      <main>
        {children}
      </main>

      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
}

export default MainLayout;