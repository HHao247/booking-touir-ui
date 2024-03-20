import { useDispatch } from 'react-redux';
import TourList from '../components/TourList';
import { useEffect } from 'react';
import { actFetchTourAsync } from '../store/post/actions';

function HomePage() {
  
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(actFetchTourAsync())
  },[])
  return (
    <>
      <TourList />
    </>
  );
}

export default HomePage;
