import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataUsa } from '../redux/screen6Slice';
import { Box } from '@mui/material';


function Screen6() {
    const dispatch = useDispatch();
  const page2Data = useSelector((state) => state.page2.data);
  const page2Status = useSelector((state) => state.page2.status);

  useEffect(() => {
    dispatch(fetchDataUsa( 'Nation','Population'));
  }, [dispatch]);
  console.log(page2Data?.data?.length);
  return (
    <div> <h2>Screen 6</h2>
    <div  className="center">
    {
      page2Status=='loading'?
      <span >Loading....</span>
      :
      !page2Data?.data?.length?
      <Box>No item found</Box>:
      
      page2Data?.map((d)=>{
        <Box>{d?.id}</Box>
      })
    }
    </div>
    </div>
  )
}

export default Screen6