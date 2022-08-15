import { useState, useEffect } from 'react';
import Helmet from '../../components/Helmet/Helmet';
import CommonSection from '../../components/UI/common-section/CommonSection';

import { Container, Row, Col } from 'reactstrap';

import ProductCard from '../../components/UI/product-card/ProductCard';
import ReactPaginate from 'react-paginate';

import styles from './Food.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../store/shopping-cart/productSlice';

const AllFoods = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [pageNumber, setPageNumber] = useState(0);

  const [sort, setSort] = useState('');

  const handleSort = (e) => {
    setSort(e.target.value);
  };

  const collatore = new Intl.Collator('en-EN');

  const sortProducts = () => {
    switch (sort) {
      case 'ascending':
        return displayPage.slice().sort((a, b) => collatore.compare(a.title, b.title));
      case 'descending':
        return displayPage.slice().sort((a, b) => collatore.compare(b.title, a.title));
      case 'high-price':
        return displayPage.slice().sort((a, b) => b.price - a.price);
      case 'low-price':
        return displayPage.slice().sort((a, b) => a.price - b.price);
      default:
        return displayPage;
    }
  };

  const dispatch = useDispatch();

  const prods = useSelector((state) => state.product.products);

  const searchedProduct = prods.filter((item) => {
    if (searchTerm.value === '') {
      return item;
    }
    if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      console.log(item);
      return item;
    } else {
      return console.log('not found');
    }
  });

  const productPerPage = 12;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = searchedProduct.slice(visitedPage, visitedPage + productPerPage);

  const pageCount = Math.ceil(searchedProduct.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  return (
    <>
    <Helmet title="Весь ассортимент" />
      <CommonSection title="Весь ассортимент" />

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6" xs="12">
              <div
                className={`${styles.search__widget} d-flex align-items-center justify-content-between`}
              >
                <input
                  type="text"
                  placeholder="Введите название..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6" xs="12" className="mb-5">
              <div className={`${styles.sorting__widget} text-end`}>
              <select
                  className="w-50"
                  id="SortBy"
                  name="sort_by"
                  onChange={(e) => handleSort(e)}
                  value={sort}
                >
                  <option>Сортировка</option>
                  <option value="ascending">По алфавиту, А-Я</option>
                  <option value="descending">По алфавиту, А-Я</option>
                  <option value="high-price">Высокая цена</option>
                  <option value="low-price">Низкая цена</option>
                </select>
              </div>
            </Col>

            {sortProducts().map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
                <ProductCard item={item} />
              </Col>
            ))}

            <div>
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel={'Назад'}
                nextLabel={'Вперед'}
                containerClassName={styles.paginationBttns}
              />
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AllFoods;
