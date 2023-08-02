import { NavLink } from 'react-router-dom'; // If you're using React Router for navigation

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/my-profile">
            My Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
