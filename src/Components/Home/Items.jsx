import { useDispatch } from 'react-redux';
import { addToCart, addItem } from '../../Features/CartSlice';
import { OpenModal } from '../../Features/ModalSlice';
import { useState } from 'react';

const Items = ({ id, img, title, amount, price }) => {
  const dispatch = useDispatch();

  const [inCart, setInCart] = useState(false);

  const addCartHandler = () => {
    console.log('clicked');
    if (inCart) {
      console.log('amount increaser');
      dispatch(addItem({ id }));
    } else {
      console.log('added to cart');
      setInCart(true);
      dispatch(addToCart({ id }));
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
