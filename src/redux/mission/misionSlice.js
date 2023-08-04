import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  missionsList: [],
  isLoadingMissions: false,
  errorLoadingMissions: false,
  missionsHaveBeenFetched: false,
};

export const getMissionsFromAPI = createAsyncThunk(
  'mission/getMissionsFromAPI',
  async (_, thunkAPI) => {
    const { missionsHaveBeenFetched, missionsList } = thunkAPI.getState().missions;
    if (missionsHaveBeenFetched) {
      return missionsList;
    }
    try {
      const resp = await axios.get('https://api.spacexdata.com/v3/missions');
      const missionsData = resp.data.map((mission) => ({
        id: mission.mission_id,
        description: mission.description,
        name: mission.mission_name,
        isJoined: false,
      }));
      return missionsData;
    } catch (error) {
      return error.message;
    }
  },
);

const MissionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    toggleMissionJoined: (state, { payload }) => {
      const { id } = payload;
      const missionToUpdate = state.rocketsList.find(
        (rocket) => rocket.id === id,
      );
      missionToUpdate.isJoined = !missionToUpdate.isJoined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMissionsFromAPI.pending, (state) => {
        state.isLoadingMissions = true;
      })
      .addCase(getMissionsFromAPI.fulfilled, (state, action) => {
        state.isLoadingMissions = false;
        state.missionsList = action.payload;
        state.errorLoadingMissions = false;
        state.missionsHaveBeenFetched = true;
      })
      .addCase(getMissionsFromAPI.rejected, (state) => {
        state.isLoadingMissions = false;
        state.errorLoadingMissions = true;
      });
  },
});

export const { missionsStatus } = MissionSlice.actions;
export const selectsAllMissions = (state) => state.mission;

export default MissionSlice.reducer;
