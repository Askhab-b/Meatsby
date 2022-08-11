import React from 'react';
import Helmet from '../../components/Helmet/Helmet';
import { Container } from 'reactstrap';
import { useRef, useState } from 'react';
import styles from './Pizza.module.css';

const Register = () => {
  const [state, setState] = useState({
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
    basePrice: 1000,
    toppingPrice: 150,
    discount: {
      userCode: '',
      applied: false,
      codes: {
        codepen: 25,
        css: 20,
        george: 30,
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
    if (e.target.className === 'topping-input') {
      const selectedTopping = e.target.id;

      state.selectedToppings.includes(selectedTopping)
        ? setState((prevState) => ({
            selectedToppings: prevState.selectedToppings.filter(
              (topping) => topping !== selectedTopping
            ),
          }))
        : setState((prevState) => ({
            selectedToppings: [...prevState.selectedToppings, selectedTopping],
          }));
    }
  };

  const handleDiscountInput = (e) => {
    const value = e.target.value.trim().toLowerCase();

    setState((prevState) => ({ discount: { ...prevState.discount, userCode: value } }));
    if (state.discount.applied) {
      setState((prevState) => ({ discount: { ...prevState.discount, applied: false } }));
    }
  };

  const handleDiscountClick = () =>
    setState((prevState) => ({ discount: { ...prevState.discount, applied: true } }));

  const handleOrderSubmit = () => {
    setState(
      (prevState) => ({ orderConfirmed: !prevState.orderConfirmed }),
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
      <section>
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
      <h2>Toppings</h2>
      <ul className={styles.toppings_info}>
        <li>
          <ToppingIcon iconType={'vegetarian'} /> Vegetarian
        </li>
        <li>
          <ToppingIcon iconType={'gluten free'} /> Gluten Free
        </li>
        <li>
          <ToppingIcon iconType={'hot'} /> Hot & Spicy
        </li>
      </ul>
      <p className={styles.toppings_info}>Toppings charged at {`${toppingPrice}`} each.</p>
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
          <div className={styles.topping && styles.topping_image_item}></div>
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
      <div key={`${topping + i}`} className={`${styles.topping} ${styles.topping}-${i} `}></div>
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
      <h2>Order Details</h2>
      <div className={styles.order_toppings}>
        <h3>Toppings:</h3>
        <ul className={styles.order_toppings_list}>
          <li>Cheese</li>
          {selectedToppings.map((topping) => (
            <li key={topping}>{topping}</li>
          ))}
        </ul>
      </div>
      <div className={styles.order_discount}>
        <h3>Discount Code:</h3>
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
              Invalid Code
            </p>
          )
        ) : null}
        <button
          className="btn discount-btn"
          onClick={handleDiscountClick}
          aria-label="Apply Discount"
        >
          Apply
        </button>
      </div>
      <div className={styles.order_price}>
        <h3>Total Price:</h3>
        <p className={styles.price}>
          {`${
            discount.applied && validDiscount
              ? (totalPrice - totalPrice * (discount.codes[discount.userCode] / 100)).toFixed(2)
              : totalPrice
          }`}
        </p>
        <button
          className="btn order-btn"
          onClick={handleOrderSubmit}
          aria-label="Confirm Order"
          ref={confirmOrderBtnRef}
        >
          Order
        </button>
      </div>
    </div>
  );
}

function OrderConfirmation({ closeConfirmationBtnRef, handleOrderSubmit }) {
  return (
    <div className={styles.order - confirmation}>
      <div className={styles.order_modal}>
        <h2>Order Confirmed</h2>
        <p>Your pizza will be with you shortly!</p>
        <button
          className="btn close-btn"
          onClick={handleOrderSubmit}
          aria-label="Close Confirmation"
          ref={closeConfirmationBtnRef}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Register;
