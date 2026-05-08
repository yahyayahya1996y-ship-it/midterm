import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";
import MainLayout from "@/layouts/MainLayout";
import ProtectedRoute from "@/components/ProtectedRoute";
import Profile from "@/pages/Profile";
import Settings from "@/pages/Settings";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
  path="/profile"
  element={
    <ProtectedRoute>
      <MainLayout>
        <Profile />
      </MainLayout>
    </ProtectedRoute>
  }
/>

<Route
  path="/settings"
  element={
    <ProtectedRoute>
      <MainLayout>
        <Settings />
      </MainLayout>
    </ProtectedRoute>
  }
/>
        <Route path="/" element={<Navigate to="/login" />} />

        <Route path="/login" element={<Login />} />

        <Route
          path="/main"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Dashboard />
              </MainLayout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;