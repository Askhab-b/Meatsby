import React from 'react';

import { ListGroup } from 'reactstrap';
import Link from 'next/link';
import CartItem from './CartItem';

import { useDispatch, useSelector } from 'react-redux';
import { cartUiActions } from '../../../store/shopping-cart/cartUiSlice';

import styles from './Shopping.module.css'

const Carts = () => {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };
  return (
    <div className={styles.cart__container}>
      <ListGroup className="cart">
        <div className={styles.cart__close}>
          <span onClick={toggleCart}>
            <i class="ri-close-fill"></i>
          </span>
        </div>

        <div className={styles.cart__item_list}>
          {cartProducts.length === 0 ? (
            <h6 className="text-center mt-5">No item added to the cart</h6>
          ) : (
            cartProducts.map((item, index) => <CartItem item={item} key={index} />)
          )}
        </div>

        <div className={`${styles.cart__bottom} d-flex align-items-center justify-content-between`}>
          <h6>
            Subtotal : <span>${totalAmount}</span>
          </h6>
          <button disabled={!token}>
            <Link href="/checkout" onClick={toggleCart}>
              Checkout
            </Link>
          </button>
        </div>
      </ListGroup>
    </div>
  );
};

export default Carts;
