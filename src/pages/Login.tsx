import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    const confirmLogin = window.confirm(
      "Are you sure you want to continue login?"
    );

    if (confirmLogin) {
      setLoading(true);

      setTimeout(() => {
        localStorage.setItem("isLoggedIn", "true");
        navigate("/main");
      }, 3000);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>

      {loading ? (
        <div>
          <p>Loading...</p>
          <div className="spinner-border" role="status"></div>
        </div>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
}

export default Login;