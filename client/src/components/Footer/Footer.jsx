import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';

import styles from './Footer.module.css';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer  className={styles.footer}>
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
            <h5 className={styles.footer__title}>Delivery Time</h5>
            <ListGroup className={styles.deliver__time_list}>
              <ListGroupItem className={`${styles.delivery__time_item} border-0 ps-0`}>
                <span>Sunday - Thursday</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>

              <ListGroupItem className={`${styles.delivery__time_item} border-0 ps-0`}>
                <span>Friday - Saturday</span>
                <p>Off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className={styles.footer__title}>Contact</h5>
            <ListGroup className={styles.deliver__time_list}>
              <ListGroupItem className={`${styles.delivery__time_item} border-0 ps-0`}>
                <p>Location: Grozny, Trosheva 7</p>
              </ListGroupItem>
              <ListGroupItem className={`${styles.delivery__time_item} border-0 ps-0`}>
                <span>Phone: +7(928)666-99-66</span>
              </ListGroupItem>

              <ListGroupItem className={`${styles.delivery__time_item} border-0 ps-0`}>
                <span>Email: imran.bursagov@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className={styles.footer__title}>Newsletter</h5>
            <p>Subscribe our newsletter</p>
            <div className={styles.newsletter}>
              <input type="email" placeholder="Enter your email" />
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
              <p className="m-0">Follow: </p>
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
