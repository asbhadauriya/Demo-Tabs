import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchRandomData } from '../redux/screen7Slice';
import { Box } from '@mui/material';


function Screen7() {
  const dispatch = useDispatch();
  const page3Data = useSelector((state) => state.page3.data);
  const page3Status = useSelector((state) => state.page3status);

  useEffect(() => {
    dispatch(fetchRandomData());
    console.log(page3Data);

  }, [dispatch]);
  return (
    <Box>
    <h2>User List</h2>
    
    <ul className='center'>
      {page3Status=='loading'? <span>
      'Loading...'
      </span>:page3Data?.results?.map((user, index) => (
        <li key={index}>
          Name: {user?.name?.first}, Age: {user?.dob?.age}, Phone: {user?.phone}, City: {user?.location.city}, State: {user?.location?.state}
        </li>
      ))
     
    }
    </ul>
  </Box>
  )
}

export default Screen7