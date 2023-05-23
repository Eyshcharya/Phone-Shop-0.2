import { useSelector } from 'react-redux';
import Items from './Items';

const HomeContainer = () => {
  const { homeItems } = useSelector((store) => store.home);
  return (
    <>
      <section className='home'>
        <header className='home-head'>
          <h2>Welcome to phone shop</h2>
          <h4>Happy Shopping!</h4>
        </header>
        <div className='home-grid'>
          {homeItems.map((item) => {
            return <Items key={item.id} {...item} />;
          })}
        </div>
      </section>
      <footer className='home-footer'>
        <hr />
        <p> Copyright &copy; 2023 · Phone Shop </p>
        <div className='footer-container'>
          <div></div>

          <a href='#'>
            <img src='/icons/facebook.png' alt='facebook' />
          </a>
          <a href='#'>
            <img src='/icons/instagram.png' alt='instagram' />
          </a>
          <a href='#'>
            <img src='/icons/twitter.png' alt='twitter' />
          </a>

          <div></div>
        </div>
      </footer>
    </>
  );
};
export default HomeContainer;
