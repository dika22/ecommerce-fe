import { Link, useLocation } from 'react-router-dom';
import "../styles/Header.css";

export default function Header() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className={`nav-item ${isActive('/') ? 'active' : ''}`}>
          Home
        </Link>
        <Link to="/product" className={`nav-item ${isActive('/product') ? 'active' : ''}`}>
          Product
        </Link>
        <Link to="/login" className={`nav-item ${isActive('/login') ? 'active' : ''}`}>
          Login
        </Link>
      </nav>
    </header>
  );
}
