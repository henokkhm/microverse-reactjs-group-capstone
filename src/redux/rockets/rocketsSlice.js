import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rocketsList: ['rocket-1', 'rocket-2', 'rocket-3'],
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers: {},
});

export default rocketsSlice.reducer;
