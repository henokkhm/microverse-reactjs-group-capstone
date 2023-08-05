import { NavLink } from 'react-router-dom'; // If you're using React Router for navigation

import styles from '../styles/Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navList}>
        <li className={styles.navListItem}>
          <NavLink
            className={styles.navLink}
            to="/"
            data-testid="navlink-rockets-page"
          >
            Rockets
          </NavLink>
        </li>
        <li className={styles.navListItem}>
          <NavLink
            className={styles.navLink}
            to="missions"
            data-testid="navlink-missions-page"
          >
            Missions
          </NavLink>
        </li>
        <li className={styles.navListItem}>
          <NavLink
            className={styles.navLink}
            to="my-profile"
            data-testid="navlink-my-profile-page"
          >
            My Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
