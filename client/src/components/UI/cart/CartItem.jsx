import React from 'react';
import { ListGroupItem } from 'reactstrap';

import styles from './Cart.module.css'

import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/shopping-cart/cartSlice';

const CartItem = ({ item }) => {
  const { id, title, price, image01, quantity, totalPrice } = item;

  const dispatch = useDispatch();

  const incrementItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        image01,
      })
    );
  };

  const decreaseItem = () => {
    dispatch(cartActions.removeItem(id));
  };

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };

  return (
    <ListGroupItem className="border-0 cart__item">
      <div className={`${styles.cart__item_info} d-flex gap-2`}>
        <img src={`http://localhost:4200/${image01}`} alt="product-img" />

        <div className={`${styles.cart__product_info} w-100 d-flex align-items-center gap-4 justify-content-between`}>
          <div>
            <h6 className={styles.cart__product_title}>{title}</h6>
            <p className={`d-flex align-items-center gap-5 ${styles.cart__product_price}`}>
              {quantity}x <span>${totalPrice}</span>
            </p>
            <div className={`d-flex align-items-center justify-content-between ${styles.increase__decrease_btn}`}>
              <span className={styles.increase__btn} onClick={incrementItem}>
                <i class="ri-add-line"></i>
              </span>
              <span className="quantity">{quantity}</span>
              <span className={styles.decrease__btn} onClick={decreaseItem}>
                <i class="ri-subtract-line"></i>
              </span>
            </div>
          </div>

          <span className={styles.delete__btn} onClick={deleteItem}>
            <i class="ri-close-line"></i>
          </span>
        </div>
      </div>
    </ListGroupItem>
  );
};

export default CartItem;
