import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';

import styles from './Footer.module.css';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className={`${styles.footer__logo} text-start`}>
              <img src='../../assets/images/res-logo.png' alt="logo" />
              <h5>Meatsby</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt pariatur accusamus
              </p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className={styles.footer__title}>Время доставки:</h5>
            <ListGroup className={styles.deliver__time_list}>
              <ListGroupItem className={`${styles.delivery__time_item} border-0 ps-0`}>
                <span>ПОНЕДЕЛЬНИК - ПЯТНИЦА</span>
                <p>10:00 - 23:00</p>
              </ListGroupItem>

              <ListGroupItem className={`${styles.delivery__time_item} border-0 ps-0`}>
                <span>СУББОТА - ВОСКРЕСЕНЬЕ</span>
                <p>Выходной</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className={styles.footer__title}>Контакты:</h5>
            <ListGroup className={styles.deliver__time_list}>
              <ListGroupItem className={`${styles.delivery__time_item} border-0 ps-0`}>
                <p>Адрес: Грозный, Трошева 7</p>
              </ListGroupItem>
              <ListGroupItem className={`${styles.delivery__time_item} border-0 ps-0`}>
                <span>Рабочий номер: +7(928)666-99-66</span>
              </ListGroupItem>

              <ListGroupItem className={`${styles.delivery__time_item} border-0 ps-0`}>
                <span>Почта: imran.bursagov@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className={styles.footer__title}>Рассылка:</h5>
            <p>Подпишитесь на нашу email рассылку, чтобы оставаться в курсе новостей.</p>
            <div className={styles.newsletter}>
              <input type="email" placeholder="Введите email" />
              <span>
                <i className="ri-send-plane-line"></i>
              </span>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className={styles.copyright__text}>
              Copyright - 2022, website made by team "Coffee with Urbech". All Rights Reserved.
            </p>
          </Col>
          <Col lg="6" md="6">
            <div className={`${styles.social__links} d-flex align_items-center gap-4 justify-content-end`}>
              <p className="m-0">Социальные сети: </p>
              <span>
                {' '}
                <Link href="instagram.com/imranzxc">
                  <i className="ri-facebook-line"></i>
                </Link>{' '}
              </span>

              <span>
                <Link href="https://github.com/imranzxc">
                  <i className="ri-github-line"></i>
                </Link>
              </span>

              <span>
                {' '}
                <Link href="https://www.youtube.com/channel/UCU_CzyUGuug2b169NOzaRZA">
                  <i className="ri-youtube-line"></i>
                </Link>{' '}
              </span>

              <span>
                {' '}
                <Link href="instagram.com/imranzxc">
                  <i className="ri-linkedin-line"></i>
                </Link>{' '}
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
