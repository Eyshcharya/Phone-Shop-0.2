import { useSelector } from 'react-redux';
import { Menu } from '../assets/icon';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const { amount } = useSelector((store) => store.cart);

  return (
    <nav className='nav-container'>
      <div className='menu-icon'>
        <Menu />
      </div>
      <Link to='/'>
        <h3>Phone Shop</h3>
      </Link>

      <div>
        <Link to='/cart'>
          <img
            className='cart-icon'
            src='/icons/fast-cart.png'
            alt='cart icon'
          />
        </Link>

        <div className='amount-container'>{amount}</div>
      </div>
    </nav>
  );
};
export default Navbar;
