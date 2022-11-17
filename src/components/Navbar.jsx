import { NavLink } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const Navbar = () => {
  const { user, setUser, destroyUser } = useUserContext();

  const handleLogout = () => {
    destroyUser();
  };

  return (
    <nav className="container">
      <ul>
        <li>
          <strong>API REST Firebase</strong>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
        |
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        {user && (
          <>
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
