import Navbar from './Navbar';
import logo from '../assets/logo.png';
import styles from '../styles/Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.branding}>
        <img className={styles.logo} src={logo} alt="Space Travelers' Hub logo" />
        <h1 className={styles.pageTitle}>Space Travelers&#39; Hub</h1>
      </div>
      <Navbar />
    </header>
  );
}
export default Header;
