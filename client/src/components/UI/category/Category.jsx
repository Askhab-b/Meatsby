import { Container, Row, Col } from 'reactstrap';

import styles from './Category.module.css';

const categoryData = [
  {
    display: 'Фастфуд',
    imgUrl: '/assets/images/category-01.png',
  },
  {
    display: 'Пицца',
    imgUrl: '/assets/images/category-02.png',
  },

  {
    display: 'Азиатская еда',
    imgUrl: '/assets/images/category-03.png',
  },

  {
    display: 'Мясо',
    imgUrl: '/assets/images/category-04.png',
  },
];

const Category = () => {
  return (
    <Container>
      <Row>
        {categoryData.map((item, index) => (
          <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={index}>
            <div className={`${styles.category__item} d-flex align-items-center gap-3`}>
              <div className={styles.category__img}>
                <img src={item.imgUrl} alt={styles.category__item} />
              </div>
              <h6>{item.display}</h6>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Category;
