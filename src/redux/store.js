import { configureStore } from '@reduxjs/toolkit';
import rocketsSlice from './rockets/rocketsSlice';
import missionReducer from './mission/misionSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsSlice,
    mission: missionReducer,
  },
});

export default store;
