import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import CommonSection from '@/components/UI/common-section/CommonSection';
import Helmet from '@/components/Helmet/Helmet';
import styles from './Checkout.module.css'

const Checkout = () => {
  const [enterName, setEnterName] = useState('');
  const [enterEmail, setEnterEmail] = useState('');
  const [enterNumber, setEnterNumber] = useState('');
  const [enterCountry, setEnterCountry] = useState('');
  const [enterCity, setEnterCity] = useState('');
  const [postalCode, setPostalCode] = useState('');

  const shippingInfo = [];
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = 30;

  const totalAmount = cartTotalAmount + Number(shippingCost);

  const submitHandler = (e) => {
    e.preventDefault();
    const userShippingAddress = {
      name: enterName,
      email: enterEmail,
      phone: enterNumber,
      country: enterCountry,
      city: enterCity,
      postalCode: postalCode,
    };

    shippingInfo.push(userShippingAddress);
    console.log(shippingInfo);
  };

  return (
    <>
    <Helmet title="Оплата" />
      <CommonSection title="Оплата" />
      <section>
        <Container>
          <Row>
            <Col lg="8" md="6">
              <h6 className="mb-4">Адрес доставки</h6>
              <form className={styles.checkout__form} onSubmit={submitHandler}>
                <div className={styles.form__group}>
                  <input
                    type="text"
                    placeholder="Введите ваше имя"
                    required
                    onChange={(e) => setEnterName(e.target.value)}
                  />
                </div>

                <div className={styles.form__group}>
                  <input
                    type="email"
                    placeholder="Введите вашу почту"
                    required
                    onChange={(e) => setEnterEmail(e.target.value)}
                  />
                </div>
                <div className={styles.form__group}>
                  <input
                    type="number"
                    placeholder="Ваш номер телефона"
                    required
                    onChange={(e) => setEnterNumber(e.target.value)}
                  />
                </div>
                <div className={styles.form__group}>
                  <input
                    type="text"
                    placeholder="Ваша страна"
                    required
                    onChange={(e) => setEnterCountry(e.target.value)}
                  />
                </div>
                <div className={styles.form__group}>
                  <input
                    type="text"
                    placeholder="Ваш город"
                    required
                    onChange={(e) => setEnterCity(e.target.value)}
                  />
                </div>
                <div className={styles.form__group}>
                  <input
                    type="number"
                    placeholder="Почтовый индекс"
                    required
                    onChange={(e) => setPostalCode(e.target.value)}
                  />
                </div>
                <button type="submit" className={styles.addTOCart__btn}>
                  Оплатить
                </button>
              </form>
            </Col>

            <Col lg="4" md="6">
              <div className={styles.checkout__bill}>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                Итог: <span>{cartTotalAmount} ₽</span>
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Доставка: <span>{shippingCost} ₽</span>
                </h6>
                <div className={styles.checkout__total}>
                  <h5 className="d-flex align-items-center justify-content-between">
                    Всего: <span>{totalAmount} ₽</span>
                  </h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      </>
  );
};

export default Checkout;
