import { NavLink } from 'react-router-dom'; // If you're using React Router for navigation

import styles from '../styles/Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navList}>
        <li className={styles.navListItem}>
          <NavLink className={styles.navLink} to="/">
            Rockets
          </NavLink>
        </li>
        <li className={styles.navListItem}>
          <NavLink className={styles.navLink} to="Missions">
            Missions
          </NavLink>
        </li>
        <li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : styles.itsActive)}
              to="/Profile"
            >
              My Profile
            </NavLink>
          </li>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
