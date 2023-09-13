// apiSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const randomUser= 'https://randomuser.me/api/'
export const fetchRandomData = createAsyncThunk('api/fetchData', async () => {
 try{
  const response = await axios.get(randomUser);
  return response.data;
 }
 catch(err){
  console.log(err);
 }
});

const screen7Slice = createSlice({
  name: 'api',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRandomData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchRandomData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default screen7Slice.reducer;
