import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/authService';

const Login = ()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError("");
      setLoading(true);
      try {
          const data = await login(email, password);
          localStorage.setItem("token", data.data.token);
          navigate("/dashboard");
      } catch (error) {
          setError(error.message);
          console.error(error);
      } finally {
          setLoading(false);
        }
    };
    return (
        <div style={styles.container}>
          <form onSubmit={handleSubmit} style={styles.form}>
            <h2>Login</h2>
            {error && <p style={styles.error}>{error}</p>}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />
            <button type="submit" style={styles.button}>Login</button>
            <p>
              Don’t have an account? <a href="/register">Register</a>
            </p>
            {loading ? "Logging in..." : ""}
          </form>
        </div>
    );
}

// Gaya CSS sederhana
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f2f2f2",
  },
  form: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    width: "300px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#007bff",
    color: "#fff",
    cursor: "pointer",
  },
  error: {
    color: "red",
    fontSize: "14px",
  },
};

export default Login