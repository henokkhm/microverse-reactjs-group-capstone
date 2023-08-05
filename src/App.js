import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getRocketsFromAPI } from './redux/rockets/rocketsSlice';
import Header from './components/Header';
import styles from './styles/App.module.css';
import RocketsPage from './pages/RocketsPage';
import MissionsPage from './pages/MissionsPage';
import MyProfilePage from './pages/MyProfilePage';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRocketsFromAPI());
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<RocketsPage />} />
          <Route path="missions" element={<MissionsPage />} />
          <Route path="my-profile" element={<MyProfilePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
