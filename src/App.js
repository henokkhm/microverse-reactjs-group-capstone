import styles from './styles/App.module.css';
import Header from './components/Header';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main>
        Main Page Content
      </main>
    </div>
  );
}

export default App;
