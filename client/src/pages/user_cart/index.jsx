import CommonSection from '@/components/UI/common-section/CommonSection';
import Helmet from '@/components/Helmet/Helmet';
import styles from './Cart.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { cartActions } from '@/store/shopping-cart/cartSlice';
import Link from 'next/link';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <>
      <Helmet title="Cart" />
      <CommonSection title="Ваша корзина" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              {cartItems.length === 0 ? (
                <h5 className="text-center">Ваша корзина пуста</h5>
              ) : (
                <table className={`${styles.table} table-bordered`}>
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Product Title</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <Tr item={item} key={item.id} />
                    ))}
                  </tbody>
                </table>
              )}

              <div className="mt-4">
                <h6>
                  Итог: <span className={styles.cart__subtotal}>{totalAmount} ₽</span>
                </h6>
                <p>Расходы на доставку будут вычисляться во время оплаты</p>
                <div className={styles.cart__page_btn}>
                  <button className="btn btn-danger me-4">
                    <Link href="/foods">Продолжить покупку</Link>
                  </button>
                  <button className="btn btn-danger me-4">
                    <Link href="/checkout">Перейти к оплате</Link>
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

const Tr = (props) => {
  const { id, image01, title, price, quantity } = props.item;
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };
  return (
    <tr>
      <td className={`text-center ${styles.cart__img_box}`}>
        <img src={`http://localhost:4200/${image01}`} alt="" />
      </td>
      <td className="text-center">{title}</td>
      <td className="text-center">${price}</td>
      <td className="text-center">{quantity}px</td>
      <td className={`text-center ${styles.cart__item_del}`}>
        <i class="ri-delete-bin-line" onClick={deleteItem}></i>
      </td>
    </tr>
  );
};

export default Cart;
