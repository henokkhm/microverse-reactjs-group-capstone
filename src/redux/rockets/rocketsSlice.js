import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  rocketsList: [],
  isLoadingRockets: false,
  errorLoadingRockets: false,
};

export const getRocketsFromAPI = createAsyncThunk(
  'rockets/getRocketsFromAPI',
  async (_, thunkAPI) => {
    try {
      const response = await fetch('https://api.spacexdata.com/v4/rockets');
      const data = await response.json();
      const rocketsData = data.map((rocket) => ({
        id: rocket.id,
        name: rocket.name,
        description: rocket.description,
        flickr_images: rocket.flickr_images,
        isReserved: false,
      }));
      return rocketsData;
    } catch (error) {
      return thunkAPI.rejectWithValue(`Something went wrong! ${error}`);
    }
  },
);

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    toggleRocketReservation: (state, { payload }) => {
      const { id } = payload;
      const rocketToUpdate = state.rocketsList.find(
        (rocket) => rocket.id === id,
      );
      rocketToUpdate.isReserved = !rocketToUpdate.isReserved;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRocketsFromAPI.pending, (state) => {
        state.isLoadingRockets = true;
      })
      .addCase(getRocketsFromAPI.fulfilled, (state, action) => {
        state.isLoadingRockets = false;
        state.rocketsList = action.payload;
        state.errorLoadingRockets = false;
      })
      .addCase(getRocketsFromAPI.rejected, (state) => {
        state.isLoadingRockets = false;
        state.errorLoadingRockets = true;
      });
  },
});

export const { toggleRocketReservation } = rocketsSlice.actions;

export default rocketsSlice.reducer;
