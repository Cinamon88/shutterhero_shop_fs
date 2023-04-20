import React, { useEffect, useState } from 'react';
import { Container, Spinner, Col, Row } from 'react-bootstrap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useDispatch, useSelector } from 'react-redux';
import { API_URL } from '../../../config';
import {
  getAll,
  updateProducts,
} from '../../../redux/productsRedux';
import styles from './Products.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';

const Products = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => fetchData(), []);

  function fetchData() {
    setLoading(true);
    fetch(`${API_URL}/product/`)
      .then((res) => res.json())
      .then(async (products) => {
        await dispatch(updateProducts(products));
        setLoading(false);
      });
  }
  const allProducts = useSelector(getAll);
  if (loading) {
    return (
      <Spinner animation="border" role="status" className="d-block mx-auto">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  } else
    return (
      <Row className={styles.root}>
        <Tabs>
          <Col className={'text-center mt-3'}>
            <TabList className={'mt-5 ' + styles.tabList}>
              <Tab className={styles.tab}>All</Tab>
              <Tab className={styles.tab}>Cameras</Tab>
              <Tab className={styles.tab}>Lenses</Tab>
              <Tab className={styles.tab}>Accessories</Tab>
            </TabList>
          </Col>
          <Container className="mt-5">
            <TabPanel>
              {' '}
              <Row xs={1} md={2} lg={4} className="g-3 ">
                {allProducts.map((product) => (
                  <Col key={product.id}>
                    <ProductBox {...product} />
                  </Col>
                ))}
              </Row>
            </TabPanel>
            
          </Container>
        </Tabs>
      </Row>
    );
};

export default Products;