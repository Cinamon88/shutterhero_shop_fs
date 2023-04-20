import React, { useEffect, useState } from 'react';
import { Alert, Button, Col, Container, Row, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import shortid from 'shortid';
import { API_URL } from '../../../config';
import { addCart } from '../../../redux/cartRedux';
import { getProductById } from '../../../redux/productsRedux';
import Amount from '../../features/Amount/Amount'
import styles from './ProductPage.module.scss';

const ProductPage = () => {
  
  const [productData, setProductData] = useState(false);
  const [status, setStatus] = useState('');
  const [comment, setComment] = useState('');

  const [value, setValue] = useState(1);
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector((state) => getProductById(state, id));

  useEffect(() => {
    setProductData(product);
    if (!productData) {
      fetch(API_URL + '/product/' + id).then((res) => {
        if (res.status === 200) {
          return res.json().then((product) => {
            setProductData(product);
          });
        }
      });
    }
  }, []);

  const changeAmount = (value) => {
    setValue(value);
  };

  const handleAddCart = async () => {

    const data = { id: shortid(), value, productData, comment };
    dispatch(addCart(data));

    if (!localStorage.getItem('cart')) {
      localStorage.setItem('cart', '[]');
    }

    let cart = JSON.parse(localStorage.getItem('cart'));
    cart.push(data);
    localStorage.setItem('cart', JSON.stringify(cart));
    setStatus('succes');
  };

  if (!productData) {
    return (
      <Spinner animation="border" role="status" className="d-block mx-auto">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  } else
    return (
      <Container className={styles.root}>
        <Row className={'flex-row ' + styles.root}>
          <div className={'col-12 col-lg-6 '}>
            <Col xs={8} md={8} lg={8}>
              <img
                src={`../images/products/${productData.image}`}
                alt="cameras"
                className={'d-block ' + styles.image}
              />
            </Col>

            {/* thumbnail for more pictures 

            <Col xs={12} md={12} lg={12} className="d-flex flex-row">
              {productData.gallery &&
                productData.gallery.map((item) => (
                  <div className={styles.gallery} key={item.id}>
                    <button
                      className={
                        item.image === activePhoto
                          ? styles.gallery_active
                          : styles.gallery_button
                      }
                      onClick={() => setActivePhoto(item.image)}
                    >
                      <img
                        src={`../images/products/${item.image}`}
                        className={styles.gallery_thumbnail}
                        alt="cameras"
                      />
                    </button>
                  </div>
                ))}
            </Col>
            */}

          </div>
          <div className={'col-12 col-lg-6 ' + styles.productInfo}>
            <h1>{productData.name}</h1>
            {productData.oldPrice > 0 ? (
              <span>
                <span className={styles.new_price}>${productData.price}</span>
                <span className={styles.old_price}>
                  ${productData.oldPrice}
                </span>
              </span>
            ) : (
              <span className={styles.regular_price}>${productData.price}</span>
            )}
           
            <Amount onClick={changeAmount} />
            <div>
              <textarea
                onChange={(e) => setComment(e.target.value)}
                placeholder="Add comment"
                rows="4"
                cols="50"
              >
              </textarea>
            </div>
            {status === 'succes' && (
              <Alert variant="success">
                <Alert.Heading>Add to cart</Alert.Heading>
              </Alert>
            )}

            <Button
              onClick={handleAddCart}
              variant="outline-secondary"
            >
              Add to Cart
            </Button>
          </div>
        </Row>
      </Container>
    );
};

export default ProductPage;