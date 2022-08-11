import { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from './Footer/Footer';
import Header from './Header/Header';

const Layout = ({ children }) => {  
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;