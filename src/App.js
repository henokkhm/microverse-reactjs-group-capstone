import styles from './styles/App.module.css';
import logo from './assets/logo.png';

function App() {
  return (
    <div className={styles.app}>
      <header>
        <img src={logo} alt="Space Travelers' Hub logo" />
        <h1>Space Travelers&#39; Hub</h1>
      </header>
    </div>
  );
}

export default App;
