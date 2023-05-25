import { Routes, Route } from 'react-router-dom';
import HomeApp from './src/Components/Home/HomeApp';
import CartApp from './src/Components/Cart/CartApp';
import { Provider } from 'react-redux';
import { store } from './src/store';
import SharedLayout from './src/Components/SharedLayout';

const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<HomeApp />}></Route>
          <Route path='cart' element={<CartApp />}></Route>
        </Route>
      </Routes>
    </Provider>
  );
};
export default App;
