import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../Navbar';
import HomeContainer from './HomeContainer';
import BuildModal from './BuildModal';
import { useEffect } from 'react';
import { calculateTotal } from '../../Features/CartSlice';

const HomeApp = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((store) => store.modal);
  const { getCartItemArray } = useSelector((store) => store.cart);

  useEffect(() => {
    dispatch(calculateTotal());
  }, [getCartItemArray]);

  return (
    <div>
      {isOpen && <BuildModal />}
      <Navbar />
      <HomeContainer />
    </div>
  );
};
export default HomeApp;
