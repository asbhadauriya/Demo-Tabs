// apiSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const dataUsa=(drilldowns,measures)=> `https://datausa.io/api/data?${drilldowns}=nation&measures=${measures}`;

export const fetchDataUsa = createAsyncThunk('api/fetchData', async (drilldowns,measures) => {
  const response = await axios.get(dataUsa(drilldowns,measures));
  return response.data;
});

const screen6Slice = createSlice({
  name: 'api',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataUsa.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDataUsa.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchDataUsa.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default screen6Slice.reducer;
