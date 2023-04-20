import React, { useEffect, useState } from 'react';
import { Container, Spinner, Col, Row } from 'react-bootstrap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useDispatch, useSelector } from 'react-redux';
import { API_URL } from '../../../config';
import {
  getAll,
  updateProducts,
} from '../../../redux/productsRedux';
import styles from './ProductsContainer.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';

const ProductsContainer = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => fetchData(), []);

  function fetchData() {
    setLoading(true);
    fetch(`${API_URL}/product`)
      .then((res) => res.json())
      .then(async (products) => {
        dispatch(updateProducts(products));
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
            <TabList className={'mt-5 ' + styles.tabs}>
              <Tab className={styles.tab}>All products</Tab>
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

export default ProductsContainer;