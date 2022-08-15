import styles from './Product.module.css'
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/shopping-cart/cartSlice';

const ProductCard = (props) => {
  const { id, title, image01, price } = props.item;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price,
      })
    );
  };

  return (
    <div className={styles.product__item}>
      <div className={styles.product__img}>
        <img src={`http://localhost:4200/${image01}`} alt="product-img" className="w-50" />
      </div>

      <div className={styles.product__content}>
        <h5>
          <Link href={`/food_details/${id}`}>{title}</Link>
        </h5>
        <div className=" d-flex align-items-center justify-content-between">
          <span className={styles.product__price}>${price}</span>
          <button className={styles.addTOCart__btn} onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
