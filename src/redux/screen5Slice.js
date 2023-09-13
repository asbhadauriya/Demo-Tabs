// apiSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const publicApi = 'https://api.publicapis.org/entries'
export const fetchApiData = createAsyncThunk('api/fetchData', async () => {
 try{
  const response = await axios.get(publicApi);
  return response.data;
  }
  catch(err){
    console.log(err);
  }
});

const screen5Slice = createSlice({
  name: 'api',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchApiData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchApiData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchApiData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default screen5Slice.reducer;
