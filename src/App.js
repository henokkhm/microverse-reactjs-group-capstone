import { Routes, Route } from 'react-router-dom';

import styles from './styles/App.module.css';
import Header from './components/Header';
import MyProfile from './pages/MyProfile';
import Rockets from './pages/Rockets';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="my-profile" element={<MyProfile />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
