import { useRef, useEffect } from 'react';
import Link from 'next/link';
import { Container } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { HiLogout } from 'react-icons/hi';

import { cartUiActions } from '../../store/shopping-cart/cartUiSlice';

import styles from './Header.module.css'
import { logOut } from '../../store/shopping-cart/authSlice';

const nav__links = [
  {
    display: 'Главная',
    path: '/',
  },
  {
    display: 'Еда',
    path: '/foods',
  },
  {
    display: 'Корзина',
    path: '/user_cart',
  },
  {
    display: 'Контакты',
    path: '/delievery_contact',
  },
  {
    display: 'Конструктор',
    path: '/pizza_constructor',
  },
];

const Header = () => {
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.token);

  const toggleMenu = () => menuRef.current.classList.toggle('show__menu');

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  const tokenRemoval = () => {
    dispatch(logOut());
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add(styles.header__shrink);
      } else {
        headerRef.current.classList.remove(styles.header__shrink);
      }
    });

    return () => window.removeEventListener('scroll', null );
  }, []);

  return (
    <header className={styles.header} ref={headerRef}>
      <Container>
        <div className={`${styles.nav__wrapper} d-flex align-items-center justify-content-between`}>
          <div className={styles.logo}>
            <img src='../../assets/images/res-logo.png' alt="logo" />
            <h5>Meatsby</h5>
          </div>

          {/* ======= menu ======= */}
          <div className={styles.navigation} ref={menuRef} onClick={toggleMenu}>
            <div className={`${styles.menu} d-flex align-items-center gap-5`}>
              {nav__links.map((item, index) => (
                <Link
                  href={item.path}
                  key={index}
                  className={(navClass) => (navClass.isActive ? styles.active__menu : '')}
                >
                  {item.display}
                </Link>
              ))}
            </div>
          </div>

          {/* ======== nav right icons ========= */}
          <div className={`${styles.nav__right} d-flex align-items-center gap-4`}>
            <span className={styles.cart__icon} onClick={toggleCart}>
              <i className="ri-shopping-basket-line"></i>
              <span className={styles.cart__badge}>{totalQuantity}</span>
            </span>

            <span className={styles.user}>
              <Link href="/login">
                <i className="ri-user-line"></i>
              </Link>
            </span>

            <span>
              <Link href="/login">
                {token ? (
                  <div onClick={tokenRemoval} className={styles.logout}>
                    <HiLogout />
                  </div>
                ) : (
                  ''
                )}
              </Link>
            </span>

            <span className={styles.mobile__menu} onClick={toggleMenu}>
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};
//hello

export default Header;
