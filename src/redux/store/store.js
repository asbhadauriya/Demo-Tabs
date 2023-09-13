import { configureStore } from '@reduxjs/toolkit';
import screen5Slice from '../screen5Slice';
import screen6Slice from '../screen6Slice';
import screen7Slice from '../screen7Slice';


const store = configureStore({
  reducer: {
    page1: screen5Slice,
    page2: screen6Slice,
    page3: screen7Slice,

  },
 
});

export default store;
