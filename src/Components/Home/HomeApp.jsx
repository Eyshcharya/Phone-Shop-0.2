import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../Navbar';
import HomeContainer from './HomeContainer';
import BuildModal from './BuildModal';
import { useEffect } from 'react';
import { calculateTotal } from '../../Features/CartSlice';
import { getItems } from '../../Features/HomeSlice';

const HomeApp = () => {
  const dispatch = useDispatch();
  const { getCartItemArray } = useSelector((store) => store.cart);
  const { isLoading } = useSelector((store) => store.home);
  const { isOpen } = useSelector((store) => store.modal);

  useEffect(() => {
    dispatch(calculateTotal());
  }, [getCartItemArray]);

  useEffect(() => {
    dispatch(getItems('random'));
  }, []);

  if (isLoading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <main>
      {isOpen && <BuildModal />}
      <Navbar />
      <HomeContainer />
    </main>
  );
};
export default HomeApp;
