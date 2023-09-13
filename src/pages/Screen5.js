import React, { useEffect } from 'react';


import '../App.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchApiData } from '../redux/screen5Slice';
import CustomTable from '../components/CustomTable';

function Screen5() {
  const dispatch = useDispatch();
  const page1Data = useSelector((state) => state.page1.data);
  const page1Status = useSelector((state) => state.page1.status);

  useEffect(() => {
    dispatch(fetchApiData());
    console.log(page1Data);

  }, [dispatch]);
  console.log(page1Data);
  return (
    <>
    {
      page1Status=='loading'?
      <div className='center'>loading...</div>
      :

      <div className='center'><CustomTable data={page1Data?.entries?.length?page1Data?.entries:[]}/></div>
    }</>
  )
}

export default Screen5