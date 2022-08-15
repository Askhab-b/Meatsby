import { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from './Footer/Footer';
import Header from './Header/Header';
import { fetchAuthMe } from '@/store/shopping-cart/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import Carts from './UI/cart/Cart';

const Layout = ({ children }) => {  
  const dispatch = useDispatch()
  const showCart = useSelector((state) => state.cartUi.cartIsVisible);
  
  useEffect(() => {
    dispatch(fetchAuthMe())
    Aos.init({ duration: 1000 });
  }, [])

  return (
    <>
      <Header />
      {showCart && <Carts />}
      {children}
      <Footer />
    </>
  );
};

export default Layout;