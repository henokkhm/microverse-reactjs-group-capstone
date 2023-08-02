import { NavLink } from 'react-router-dom'; // If you're using React Router for navigation

import styles from '../styles/Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navList}>
        <li className={styles.navListItem}>
          <NavLink className={styles.navLink} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={`${styles.navLink} ${styles.myProfileLink}`}
            to="/my-profile"
          >
            My Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
