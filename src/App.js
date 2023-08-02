import { Routes, Route } from 'react-router-dom';

import styles from './styles/App.module.css';
import Header from './components/Header';
import Home from './pages/Home';
import MyProfile from './pages/MyProfile';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="my-profile" element={<MyProfile />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
