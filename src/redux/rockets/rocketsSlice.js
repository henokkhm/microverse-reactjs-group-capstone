import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import getRockets from '../../api/rockets-api';

const initialState = {
  rocketsList: [],
};

export const getRocketsFromAPI = createAsyncThunk(
  'rockets/getRocketsFromAPI',
  async (_, thunkAPI) => {
    try {
      const resp = await getRockets();
      const rocketsData = resp.map((rocket) => ({
        id: rocket.id,
        name: rocket.name,
        type: rocket.type,
        flickr_images: rocket.flickr_images,
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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRocketsFromAPI.fulfilled, (state, action) => {
      state.rocketsList = action.payload;
    });
  },
});

export default rocketsSlice.reducer;
