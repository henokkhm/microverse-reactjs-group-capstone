import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  missionsList: [],
  isLoadingMissions: false,
  errorLoadingMissions: false,
};

export const getMissionsFromAPI = createAsyncThunk(
  'mission/getMissionsFromAPI',
  async (_, thunkAPI) => {
    const { missionsHaveBeenFetched, missionsList } = thunkAPI.getState().missions;
    if (missionsHaveBeenFetched) {
      return missionsList;
    }
    try {
      const response = await fetch('https://api.spacexdata.com/v3/missions');
      const data = await response.json();
      const missionsData = data.map((mission) => ({
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
      const missionToUpdate = state.missionsList.find(
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
      })
      .addCase(getMissionsFromAPI.rejected, (state) => {
        state.isLoadingMissions = false;
        state.errorLoadingMissions = true;
      });
  },
});

export const { toggleMissionJoined } = MissionSlice.actions;

export default MissionSlice.reducer;
