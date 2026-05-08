import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    if (username !== "yahya" || password !== "yahya") {
      alert("Wrong username or password");
      return;
    }

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
        <div>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <br />
          <br />

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <br />
          <br />

          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}

export default Login;