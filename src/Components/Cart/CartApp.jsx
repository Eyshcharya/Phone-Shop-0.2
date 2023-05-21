import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import CartContainer from './CartContainer';
import Navbar from '../Navbar';
import Modal from '../Cart/Modal';
import { calculateTotal } from '../../Features/CartSlice';

function CartApp() {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((store) => store.modal);
  const { getCartItemArray } = useSelector((store) => store.cart);

  useEffect(() => {
    dispatch(calculateTotal());
  }, [getCartItemArray]);

  return (
    <div>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </div>
  );
}

export default CartApp;
