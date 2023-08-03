import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getRocketsFromAPI } from './redux/rockets/rocketsSlice';
import Header from './components/Header';
import Rockets from './pages/Rockets';
import Profile from './pages/MyProfile';
import styles from './styles/App.module.css';
import Missions from './components/Missions';

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
          <Route path="/" element={<Rockets />} />
          <Route path="Missions" element={<Missions />} />
          <Route path="Profile" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
