import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getRocketsFromAPI } from './redux/rockets/rocketsSlice';
import Header from './components/Header';
import MyProfile from './pages/MyProfile';
import Rockets from './pages/Rockets';
import styles from './styles/App.module.css';

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
          <Route path="my-profile" element={<MyProfile />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
