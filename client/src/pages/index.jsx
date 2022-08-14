import { useState, useEffect } from 'react';
import Helmet from '../components/Helmet/Helmet.js';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import Link from 'next/link';
import Category from '../components/UI/category/Category.jsx';
import styles from './Home.module.css';
import ProductCard from '../components/UI/product-card/ProductCard.jsx';
import TestimonialSlider from '../components/UI/slider/TestimonialSlider.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { getProduct } from '../store/shopping-cart/productSlice.js';

const featureData = [
  {
    title: 'Quick Delivery',
    imgUrl: '/assets/images/service-01.png',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.',
  },

  {
    title: 'Super Dine In',
    imgUrl: '/assets/images/service-02.png',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.',
  },
  {
    title: 'Easy Pick Up',
    imgUrl: '/assets/images/service-03.png',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.',
  },
];

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  const [category, setCategory] = useState('ALL');
  const [allProducts, setAllProducts] = useState(products);

  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === 'Pizza');
    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
    dispatch(getProduct());
  }, []);

  useEffect(() => {
    if (category === 'ALL') {
      setAllProducts(products);
    }

    if (category === 'BURGER') {
      const filteredProducts = products.filter((item) => item.category === 'Burger');

      setAllProducts(filteredProducts);
    }

    if (category === 'PIZZA') {
      const filteredProducts = products.filter((item) => item.category === 'Pizza');

      setAllProducts(filteredProducts);
    }

    if (category === 'BREAD') {
      const filteredProducts = products.filter((item) => item.category === 'Bread');

      setAllProducts(filteredProducts);
    }
  }, [category]);

  return (
    <>
      <Helmet title="Главная" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div data-aos="zoom-out-right" className={styles.hero__content}>
                <h5 className="mb-3">Easy way to make an order</h5>
                <h1 className={`mb-4 ${styles.hero__title}`}>
                  <span>HUNGRY?</span> Just wait <br /> food at
                  <span> your door</span>
                </h1>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui magni delectus
                  tenetur autem, sint veritatis!
                </p>

                <div className={`${styles.hero__btns} d-flex align-items-center gap-5 mt-4`}>
                  <button
                    className={`${styles.order__btn} d-flex align-items-center justify-content-between`}
                  >
                    Order now <i className="ri-arrow-right-s-line"></i>
                  </button>

                  <button className={styles.all__foods_btn}>
                    <Link href="/foods">See all foods</Link>
                  </button>
                </div>

                <div className={`${styles.hero__service} d-flex align-items-center gap-5 mt-5 `}>
                  <p className=" d-flex align-items-center gap-2 ">
                    <span className={styles.shipping__icon}>
                      <i className="ri-car-line"></i>
                    </span>{' '}
                    No shipping charge
                  </p>

                  <p className=" d-flex align-items-center gap-2 ">
                    <span className={styles.shipping__icon}>
                      <i className="ri-shield-check-line"></i>
                    </span>{' '}
                    100% secure checkout
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div data-aos="zoom-out-left" className={styles.hero__img}>
                <img src="/assets/images/hero.png" alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" className="pt-0">
        <Category />
      </section>

      <section>
        <Container>
          <Row  data-aos="flip-left"
               data-aos-easing="ease-out-cubic"
               data-aos-duration="1500">
            <Col lg="12" className="text-center">
              <h5 className={`${styles.feature__subtitle} mb-4`}>What we serve</h5>
              <h2 className={styles.feature__title}>Just sit back at home</h2>
              <h2 className={styles.feature__title}>
                we will <span>take care</span>
              </h2>
              <p className={`mb-1 mt-4 ${styles.feature__text}`}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, officiis?
              </p>
              <p className={styles.feature__text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, eius.{' '}
              </p>
            </Col>

            {featureData.map((item, index) => (
              <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                <div
                  data-aos="zoom-out-up"
                  className={`${styles.feature__item} text-center px-5 py-3`}
                >
                  <img src={item.imgUrl} alt="feature-img" className="w-25 mb-3" />
                  <h5 className=" fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row  data-aos="flip-up">
            <Col lg="12" className="text-center">
              <h2>Popular Foods</h2>
            </Col>

            <Col lg="12">
              <div
                className={`${styles.food__category} d-flex align-items-center justify-content-center gap-4`}
              >
                <button
                  className={`${styles.all__btn} ${
                    category === 'ALL' ? styles.foodBtnActive : ''
                  } `}
                  onClick={() => setCategory('ALL')}
                >
                  All
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === 'BURGER' ? styles.foodBtnActive : ''
                  } `}
                  onClick={() => setCategory('BURGER')}
                >
                  <img src="/assets/images/hamburger.png" alt="" />
                  Burger
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === 'PIZZA' ? styles.foodBtnActive : ''
                  } `}
                  onClick={() => setCategory('PIZZA')}
                >
                  <img src="/assets/images/pizza.png" alt="" />
                  Pizza
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === 'BREAD' ? styles.foodBtnActive : ''
                  } `}
                  onClick={() => setCategory('BREAD')}
                >
                  <img src="/assets/images/bread.png" alt="" />
                  Bread
                </button>
              </div>
            </Col>

            {allProducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className={styles.why__choose_us}>
        <Container>
          <Row>
            <Col data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1500" lg="6" md="6">
              <img src="/assets/images/location.png" alt="why-tasty-treat" className="w-100" />
            </Col>

            <Col lg="6" md="6">
              <div  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1500"className={styles.why__tasty_treat}>
                <h2 className={`${styles.tasty__treat_title} mb-4`}>
                  Why <span>Tasty Treat?</span>
                </h2>
                <p className={styles.tasty__treat_desc}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, minus. Tempora
                  reprehenderit a corporis velit, laboriosam vitae ullam, repellat illo sequi odio
                  esse iste fugiat dolor, optio incidunt eligendi deleniti!
                </p>

                <ListGroup data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" className="mt-4">
                  <ListGroupItem className="border-0 ps-0">
                    <p className={`${styles.choose__us_title} d-flex align-items-center gap-2`}>
                      <i className="ri-checkbox-circle-line"></i> Fresh and tasty foods
                    </p>
                    <p className={styles.choose__us_desc}>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, voluptatibus.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className={`${styles.choose__us_title} d-flex align-items-center gap-2`}>
                      <i className="ri-checkbox-circle-line"></i> Quality support
                    </p>
                    <p className={styles.choose__us_desc}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, earum.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className={`${styles.choose__us_title} d-flex align-items-center gap-2`}>
                      <i className="ri-checkbox-circle-line"></i>Order from any location{' '}
                    </p>
                    <p className={styles.choose__us_desc}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, earum.
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
            <Col lg="12" className="text-center mb-5 ">
              <h2>Hot Pizza</h2>
            </Col>

            {hotPizza.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col data-aos="fade-right" lg="6" md="6">
              <div className={styles.testimonial}>
                <h5 className={`${styles.testimonial__subtitle} mb-4`}>Testimonial</h5>
                <h2 className="testimonial__title mb-4">
                  What our <span>customers</span> are saying
                </h2>
                <p className={styles.testimonial__desc}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio quasi qui
                  minus quos sit perspiciatis inventore quis provident placeat fugiat!
                </p>

                <TestimonialSlider />
              </div>
            </Col>

            <Col data-aos="fade-left" lg="6" md="6">
              <img src="/assets/images/network.png" alt="testimonial-img" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
