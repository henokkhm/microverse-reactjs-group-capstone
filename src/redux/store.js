import { configureStore } from '@reduxjs/toolkit';
import rocketsSlice from './rockets/rocketsSlice';
import missionSlice from './missions/missionsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsSlice,
    missions: missionSlice,
  },
});

export default store;
