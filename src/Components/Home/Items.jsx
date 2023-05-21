import { useDispatch } from 'react-redux';
import { addItemToCart, increaseItemCount } from '../../Features/CartSlice';
import { OpenModal } from '../../Features/ModalSlice';
import { useState } from 'react';

const Items = ({ id, img, title, amount, price }) => {
  const dispatch = useDispatch();
  const [inCart, setInCart] = useState(false);

  const addCartHandler = () => {
    if (inCart) {
      dispatch(increaseItemCount({ id }));
      return;
    } else {
      setInCart(true);
      dispatch(addItemToCart({ id }));
    }
  };

  return (
    <div className='home-item-list'>
      <article className='home-item'>
        <div>
          <img src={img} alt={title} />
        </div>
        <h4>{title}</h4>
        <h4 className='item-price'>${price}</h4>
        <div className='item-btns'>
          <button className='addToCart-btn' onClick={addCartHandler}>
            Add to Cart
          </button>
          <button
            className='buyNow-btn'
            onClick={() => {
              dispatch(OpenModal());
            }}
          >
            Buy Now
          </button>
        </div>
      </article>
    </div>
  );
};
export default Items;
