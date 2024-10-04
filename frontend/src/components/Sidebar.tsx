import { Link, useNavigate } from "react-router-dom";

import './Sidebar.css';

export function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  }

  return (
    <div className="sidebar">
      <h2>Menu</h2>
      <ul className="menuList">
          <li>
              <Link to="/cliente" className="link">Clientes</Link>
          </li>
          <li>
              <button onClick={handleLogout} className="logoutButton">
                Logout
              </button>
          </li>
      </ul>
    </div>
  );

}

