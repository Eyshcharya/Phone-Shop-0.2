import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
import { OpenModal } from '../../Features/ModalSlice';

const CartContainer = () => {
  const dispatch = useDispatch();

  const { total, amount, getCartItemArray } = useSelector(
    (store) => store.cart
  );

  const handleClear = () => {
    dispatch(OpenModal());
  };

  if (amount < 1) {
    return (
      <section className='cart'>
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className='cart'>
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {getCartItemArray.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button className='btn clear-btn' onClick={handleClear}>
          clear cart
        </button>
      </footer>
    </section>
  );
};
export default CartContainer;
