/*
import Helmet from '../../components/Helmet/Helmet';
import { Container } from 'reactstrap';
import { useRef, useState } from 'react';
import styles from './Pizza.module.css';
*/

/*
const Register = () => {
  const [state, setState] = useState({
    toppingOptions: {
      pepperoni: {
        icons: [`${styles.gluten} free`],
        amount: 12,
      },
      sausage: {
        icons: [`${styles.gluten} free`],
        amount: 13,
      },
      chicken: {
        icons: [`${styles.gluten} free`],
        amount: 14,
      },
      onions: {
        icons: [`${styles.vegetarian}`, `${styles.gluten} free`],
        amount: 15,
      },
      peppers: {
        icons: [`${styles.vegetarian}`, `${styles.gluten} free`],
        amount: 15,
      },
      mushrooms: {
        icons: [`${styles.vegetarian}`, `${styles.gluten} free`],
        amount: 22,
      },
      pineapple: {
        icons: [`${styles.vegetarian}`, `${styles.gluten} free`],
        amount: 16,
      },
      olives: {
        icons: [`${styles.vegetarian}`, `${styles.gluten} free`],
        amount: 19,
      },
      jalapenos: {
        icons: [`${styles.vegetarian}`, `${styles.gluten} free`, `${styles.hot}`],
        amount: 19,
      },
    },
    selectedToppings: [],
    basePrice: 20000,
    toppingPrice: 4000,
    discount: {
      userCode: '',
      applied: false,
      codes: {
        hamzat: 25,
        intocode: 20,
        imran: 30,
        html: 10,
        javascript: 15,
        pizza: 40,
        react: 35,
      },
    },
    orderConfirmed: false,
  });

  const confirmOrderBtnRef = useRef();
  const closeConfirmationBtnRef = useRef();

  const handleToppingOptionClick = (e) => {
    if (e.target.className === styles.topping_input) {
      const selectedTopping = e.target.id;

      state.selectedToppings.includes(selectedTopping)
        ? setState((prevState) => ({
            ...prevState,
            selectedToppings: prevState.selectedToppings.filter(
              (topping) => topping !== selectedTopping
            ),
          }))
        : setState((prevState) => ({
            ...prevState,
            selectedToppings: [...prevState.selectedToppings, selectedTopping],
          }));
    }
  };

  const handleDiscountInput = (e) => {
    const value = e.target.value.trim().toLowerCase();

    setState((prevState) => ({
      ...prevState,
      discount: { ...prevState.discount, userCode: value },
    }));
    if (state.discount.applied) {
      setState((prevState) => ({
        ...prevState,
        discount: { ...prevState.discount, applied: false },
      }));
    }
  };

  const handleDiscountClick = () =>
    setState((prevState) => ({ ...prevState, discount: { ...prevState.discount, applied: true } }));

  const handleOrderSubmit = () => {
    setState(
      (prevState) => ({ ...prevState, orderConfirmed: !prevState.orderConfirmed }),
      () => {
        state.orderConfirmed
          ? closeConfirmationBtnRef.current.focus()
          : confirmOrderBtnRef.current.focus();
      }
    );
  };

  return (
    <>
      <Helmet title="Constructor" />
      <section className={styles.pizza_bbb}>
        <Container>
          <main>
            <div className={styles.containerDiv}>
              <ToppingSelect
                toppingOptions={Object.entries(state.toppingOptions)}
                toppingPrice={(state.toppingPrice / 100).toFixed(2)}
                handleToppingOptionClick={handleToppingOptionClick}
              />
              <Pizza
                selectedToppings={state.selectedToppings}
                toppingOptions={state.toppingOptions}
              />
              <OrderDetails
                selectedToppings={state.selectedToppings}
                totalPrice={(
                  (state.basePrice + state.toppingPrice * state.selectedToppings.length) /
                  100
                ).toFixed(2)}
                discount={state.discount}
                confirmOrderBtnRef={confirmOrderBtnRef}
                handleDiscountInput={handleDiscountInput}
                handleDiscountClick={handleDiscountClick}
                handleOrderSubmit={handleOrderSubmit}
              />
              {state.orderConfirmed ? (
                <OrderConfirmation
                  handleOrderSubmit={handleOrderSubmit}
                  closeConfirmationBtnRef={closeConfirmationBtnRef}
                />
              ) : null}
            </div>
          </main>
        </Container>
      </section>
    </>
  );
};

function ToppingSelect({ toppingOptions, toppingPrice, handleToppingOptionClick }) {
  return (
    <div className={styles.topping_select}>
      <h2>Топпинги</h2>
      <ul className={styles.toppings_info}>
        <li>
          <ToppingIcon iconType={styles.vegetarian} /> Вегетерианское
        </li>
        <li>
          <ToppingIcon iconType={`${styles.gluten} ${styles.free}`} /> Без глютена
        </li>
        <li>
          <ToppingIcon iconType={styles.hot} /> Острое
        </li>
      </ul>
      <p className={styles.toppings_info}>Топпинги идут по {`₽${toppingPrice}`} каждый.</p>
      <ul className={styles.topping_options} onClick={handleToppingOptionClick}>
        {toppingOptions.map((topping) => (
          <ToppingOption key={topping[0]} topping={topping[0]} toppingIcons={topping[1].icons} />
        ))}
      </ul>
    </div>
  );
}

function ToppingOption({ topping, toppingIcons }) {
  return (
    <li className={styles.topping_option}>
      <input type="checkbox" id={topping} className={styles.topping_input} />
      <label
        className={styles.topping_label}
        htmlFor={topping}
        aria-label={`${topping} ${toppingIcons.map((icon) => icon)}`}
      >
        <div className={styles.topping_image}>
          <div className={`${topping}`}></div>
        </div>
        <span className={styles.topping_label_content}>
          <span className={styles.topping_label_text}>{topping}</span>
          <span className={styles.topping_label_icons}>
            {toppingIcons.map((icon) => (
              <ToppingIcon key={icon} iconType={icon} />
            ))}
          </span>
        </span>
      </label>
    </li>
  );
}

function ToppingIcon({ iconType }) {
  return (
    <span className={`${styles.topping_icon} ${iconType.split(' ')[0]}`} aria-label={iconType}>
      {iconType.charAt(0).toUpperCase()}
    </span>
  );
}

function Pizza({ toppingOptions, selectedToppings }) {
  return (
    <div className={styles.pizza_container}>
      <div className={styles.pizza}>
        {selectedToppings.map((topping) => (
          <PizzaTopping
            key={topping}
            topping={topping}
            toppingAmount={toppingOptions[topping].amount}
          />
        ))}
      </div>
    </div>
  );
}

function PizzaTopping({ topping, toppingAmount }) {
  let toppings = [];

  for (let i = 1; i <= toppingAmount; i++) {
    toppings.push(
      <div key={`${topping + i}`} className={`${styles.topping} ${topping} ${topping}-${i} `}></div>
    );
  }

  return toppings;
}

function OrderDetails({
  selectedToppings,
  totalPrice,
  discount,
  confirmOrderBtnRef,
  handleDiscountInput,
  handleDiscountClick,
  handleOrderSubmit,
}) {
  const validDiscount = Object.keys(discount.codes).includes(discount.userCode);

  return (
    <div className={styles.order}>
      <h2>Детали заказа</h2>
      <div className={styles.order_toppings}>
        <h3>Топпинги:</h3>
        <ul className={styles.order_toppings_list}>
          <li>Сыр</li>
          {selectedToppings.map((topping) => (
            <li key={topping}>{topping}</li>
          ))}
        </ul>
      </div>
      <div className={styles.order_discount}>
        <h3>Промокод:</h3>
        <input
          type="text"
          className={styles.discount_input}
          spellCheck="false"
          value={discount.userCode}
          maxLength="10"
          onChange={handleDiscountInput}
          aria-label="Discount Code"
          aria-describedby="discount-message"
          aria-invalid={discount.applied && !validDiscount}
        />
        {discount.applied ? (
          validDiscount ? (
            <p
              id="discount-message"
              className={`${styles.discount_message} ${styles.discount_message__valid}`}
              role="alert"
            >
              Valid Code: {discount.codes[discount.userCode]}% Off
            </p>
          ) : (
            <p
              id="discount-message"
              className={`${styles.discount_message} ${styles.discount_message__invalid}`}
              role="alert"
            >
              Неверный код
            </p>
          )
        ) : null}
        <button
          className={`${styles.btn} ${styles.discount_btn}`}
          onClick={handleDiscountClick}
          aria-label="Apply Discount"
        >
          Подтвердить
        </button>
      </div>
      <div className={styles.order_price}>
        <h3>Итого:</h3>
        <p className={styles.price}>
          {`${
            discount.applied && validDiscount
              ? (totalPrice - totalPrice * (discount.codes[discount.userCode] / 100)).toFixed(2)
              : totalPrice
          }`}
        </p>
        <button
          className={`${styles.btn} ${styles.order_btn}`}
          onClick={handleOrderSubmit}
          aria-label="Confirm Order"
          ref={confirmOrderBtnRef}
        >
          Заказать
        </button>
      </div>
    </div>
  );
}

function OrderConfirmation({ closeConfirmationBtnRef, handleOrderSubmit }) {
  return (
    <div className={styles.order_confirmation}>
      <div className={styles.order_modal}>
        <h2>Заказ принят</h2>
        <p>Ваша пицца будет доставлена в кратчайшие сроки!</p>
        <button
          className="btn-pizza close-btn"
          onClick={handleOrderSubmit}
          aria-label="Close Confirmation"
          ref={closeConfirmationBtnRef}
        >
          Закрыть
        </button>
      </div>
    </div>
  );
}

export default Register;
*/

import React, { Component } from 'react';

class Register extends Component {
  state = {
    toppingOptions: {
      pepperoni: {
        icons: ['gluten free'],
        amount: 12,
      },
      bacon: {
        icons: ['gluten free'],
        amount: 13,
      },
      ham: {
        icons: ['gluten free'],
        amount: 14,
      },
      sausage: {
        icons: ['gluten free'],
        amount: 13,
      },
      chicken: {
        icons: ['gluten free'],
        amount: 14,
      },
      onions: {
        icons: ['vegetarian', 'gluten free'],
        amount: 15,
      },
      peppers: {
        icons: ['vegetarian', 'gluten free'],
        amount: 15,
      },
      mushrooms: {
        icons: ['vegetarian', 'gluten free'],
        amount: 22,
      },
      pineapple: {
        icons: ['vegetarian', 'gluten free'],
        amount: 16,
      },
      olives: {
        icons: ['vegetarian', 'gluten free'],
        amount: 19,
      },
      jalapenos: {
        icons: ['vegetarian', 'gluten free', 'hot'],
        amount: 19,
      },
    },
    selectedToppings: [],
    basePrice: 20000,
    toppingPrice: 4000,
    discount: {
      userCode: '',
      applied: false,
      codes: {
        hamzat: 25,
        css: 20,
        intocode: 30,
        html: 10,
        javascript: 15,
        pizza: 40,
        react: 35,
      },
    },
    orderConfirmed: false,
  };

  confirmOrderBtnRef = React.createRef();
  closeConfirmationBtnRef = React.createRef();

  handleToppingOptionClick = (e) => {
    if (e.target.className === 'topping-input') {
      const selectedTopping = e.target.id;

      this.state.selectedToppings.includes(selectedTopping)
        ? this.setState((prevState) => ({
            selectedToppings: prevState.selectedToppings.filter(
              (topping) => topping !== selectedTopping
            ),
          }))
        : this.setState((prevState) => ({
            selectedToppings: [...prevState.selectedToppings, selectedTopping],
          }));
    }
  };

  handleDiscountInput = (e) => {
    const value = e.target.value.trim().toLowerCase();

    this.setState((prevState) => ({ discount: { ...prevState.discount, userCode: value } }));
    if (this.state.discount.applied) {
      this.setState((prevState) => ({ discount: { ...prevState.discount, applied: false } }));
    }
  };

  handleDiscountClick = () =>
    this.setState((prevState) => ({ discount: { ...prevState.discount, applied: true } }));

  handleOrderSubmit = () => {
    this.setState(
      (prevState) => ({ orderConfirmed: !prevState.orderConfirmed }),
      () => {
        this.state.orderConfirmed
          ? this.closeConfirmationBtnRef.current.focus()
          : this.confirmOrderBtnRef.current.focus();
      }
    );
  };

  render() {
    return (
      <React.Fragment>
        <main className='head-pp'>
          <div className="pp-container">
            <ToppingSelect
              toppingOptions={Object.entries(this.state.toppingOptions)}
              toppingPrice={(this.state.toppingPrice / 100).toFixed(2)}
              handleToppingOptionClick={this.handleToppingOptionClick}
            />
            <Pizza
              selectedToppings={this.state.selectedToppings}
              toppingOptions={this.state.toppingOptions}
            />
            <OrderDetails
              selectedToppings={this.state.selectedToppings}
              totalPrice={(
                (this.state.basePrice +
                  this.state.toppingPrice * this.state.selectedToppings.length) /
                100
              ).toFixed(2)}
              discount={this.state.discount}
              confirmOrderBtnRef={this.confirmOrderBtnRef}
              handleDiscountInput={this.handleDiscountInput}
              handleDiscountClick={this.handleDiscountClick}
              handleOrderSubmit={this.handleOrderSubmit}
            />
            {this.state.orderConfirmed ? (
              <OrderConfirmation
                handleOrderSubmit={this.handleOrderSubmit}
                closeConfirmationBtnRef={this.closeConfirmationBtnRef}
              />
            ) : null}
          </div>
        </main>
      </React.Fragment>
    );
  }
}

function ToppingSelect({ toppingOptions, toppingPrice, handleToppingOptionClick }) {
  return (
    <div className="topping-select">
      <h2>Топпинги</h2>
      <ul className="toppings-info">
        <li>
          <ToppingIcon iconType={'vegetarian'} /> Вегетерианское
        </li>
        <li>
          <ToppingIcon iconType={'gluten free'} /> Без глютена
        </li>
        <li>
          <ToppingIcon iconType={'hot'} /> Острое
        </li>
      </ul>
      <p className="toppings-info">Топпинги идут по {`$${toppingPrice}`} каждый.</p>
      <ul className="topping-options" onClick={handleToppingOptionClick}>
        {toppingOptions.map((topping) => (
          <ToppingOption key={topping[0]} topping={topping[0]} toppingIcons={topping[1].icons} />
        ))}
      </ul>
    </div>
  );
}

function ToppingOption({ topping, toppingIcons }) {
  return (
    <li className="topping-option">
      <input type="checkbox" id={topping} className="topping-input" />
      <label
        className="topping-label"
        htmlFor={topping}
        aria-label={`${topping} (${toppingIcons.map((icon) => icon)})`}
      >
        <div className="topping-image">
          <div className={`${topping} topping-image-item`}></div>
        </div>
        <span className="topping-label-content">
          <span className="topping-label-text">{topping}</span>
          <span className="topping-label-icons">
            {toppingIcons.map((icon) => (
              <ToppingIcon key={icon} iconType={icon} />
            ))}
          </span>
        </span>
      </label>
    </li>
  );
}

function ToppingIcon({ iconType }) {
  return (
    <span className={`topping-icon ${iconType.split(' ')[0]}`} aria-label={iconType}>
      {iconType.charAt(0).toUpperCase()}
    </span>
  );
}

function Pizza({ toppingOptions, selectedToppings }) {
  return (
    <div className="pizza-container">
      <div className="pizza">
        {selectedToppings.map((topping) => (
          <PizzaTopping
            key={topping}
            topping={topping}
            toppingAmount={toppingOptions[topping].amount}
          />
        ))}
      </div>
    </div>
  );
}

function PizzaTopping({ topping, toppingAmount }) {
  let toppings = [];

  for (let i = 1; i <= toppingAmount; i++) {
    toppings.push(
      <div key={`${topping + i}`} className={`topping ${topping} ${topping}-${i} `}></div>
    );
  }

  return toppings;
}

function OrderDetails({
  selectedToppings,
  totalPrice,
  discount,
  confirmOrderBtnRef,
  handleDiscountInput,
  handleDiscountClick,
  handleOrderSubmit,
}) {
  const validDiscount = Object.keys(discount.codes).includes(discount.userCode);

  return (
    <div className="order">
      <h2>Детали заказа</h2>
      <div className="order-toppings">
        <h3>Топпинги:</h3>
        <ul className="order-toppings-list">
          <li>Сыр</li>
          {selectedToppings.map((topping) => (
            <li key={topping}>{topping}</li>
          ))}
        </ul>
      </div>
      <div className="order-discount">
        <h3>Промокод:</h3>
        <input
          type="text"
          className="discount-input"
          spellCheck="false"
          value={discount.userCode}
          maxLength="10"
          onChange={handleDiscountInput}
          aria-label="Discount Code"
          aria-describedby="discount-message"
          aria-invalid={discount.applied && !validDiscount}
        />
        {discount.applied ? (
          validDiscount ? (
            <p
              id="discount-message"
              className="discount-message discount-message--valid"
              role="alert"
            >
              Правильный код: {discount.codes[discount.userCode]}% Off
            </p>
          ) : (
            <p
              id="discount-message"
              className="discount-message discount-message--invalid"
              role="alert"
            >
              Неверный код
            </p>
          )
        ) : null}
        <button
          className="btn-pizza discount-btn"
          onClick={handleDiscountClick}
          aria-label="Apply Discount"
        >
          Подтвердить
        </button>
      </div>
      <div className="order-price">
        <h3>Итог:</h3>
        <p className="price">
          {`₽${
            discount.applied && validDiscount
              ? (totalPrice - totalPrice * (discount.codes[discount.userCode] / 100)).toFixed(2)
              : totalPrice
          }`}
        </p>
        <button
          className="btn-pizza order-btn"
          onClick={handleOrderSubmit}
          aria-label="Confirm Order"
          ref={confirmOrderBtnRef}
        >
          Заказать
        </button>
      </div>
    </div>
  );
}

function OrderConfirmation({ closeConfirmationBtnRef, handleOrderSubmit }) {
  return (
    <div className="order-confirmation">
      <div className="order-modal">
        <h2>Заказ принят</h2>
        <p>Ваша пицца будет доставлена в кратчайшие сроки!</p>
        <button
          className="btn-pizza close-btn"
          onClick={handleOrderSubmit}
          aria-label="Close Confirmation"
          ref={closeConfirmationBtnRef}
        >
          Закрыть
        </button>
      </div>
    </div>
  );
}

export default Register;
