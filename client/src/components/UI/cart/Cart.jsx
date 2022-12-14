import { ListGroup } from 'reactstrap';
import Link from 'next/link';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { cartUiActions } from '@/store/shopping-cart/cartUiSlice';
import { selectIsAuth } from '@/store/shopping-cart/authSlice';
import styles from './Shopping.module.css'

const Carts = () => {
  const isAuth = useSelector(selectIsAuth)
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const toggleCart = () => {
    dispatch(cartUiActions.toggle())
  }
  
  return (
    <div className={styles.cart__container}>
      <ListGroup className={styles.cart}>
        <div className={styles.cart__close}>
          <span onClick={toggleCart}>
            <i class="ri-close-fill"></i>
          </span>
        </div>

        <div className={styles.cart__item_list}>
          {cartProducts.length === 0 ? (
            <h6 className="text-center mt-5">Ваша корзина пуста</h6>
          ) : (
            cartProducts.map((item, index) => <CartItem item={item} key={index} />)
          )}
        </div>

        <div className={`${styles.cart__bottom} d-flex align-items-center justify-content-between`}>
          <h6>
            Всего : <span>{totalAmount} ₽</span>
          </h6>
          <button disabled={!isAuth}>
            <Link href="/checkout" onClick={toggleCart}>
                Оплата
            </Link>
          </button>
        </div>
      </ListGroup>
    </div>
  );
};

export default Carts;
