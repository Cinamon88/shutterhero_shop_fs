import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import styles from './ProductBox.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProductBox = ({
  id,
  name,
  category,
  price,
  image,
  oldPrice,
}) => {
  return (
    <Card className={styles.productbox}>
      <Card.Img variant="top" src={`./images/products/${image}`} />
      <Card.Body className="text-center">
        <Col className="d-flex justify-content-center">
          {oldPrice > 0 ? (
            <>
              <p className={styles.categories}>{category}</p>
            </>
          ) : (
            <p className={styles.categories}> {category}</p>
          )}
        </Col>
        <Card.Title className={styles.cardTitle}>{name}</Card.Title>
        <Card.Text className="m-0">
          {oldPrice > 0 ? (
            <div className={'d-flex justify-content-center ' + styles.priceDiv}>
              <span className={styles.price}>${price}</span>
              <span className={styles.oldPrice}>${oldPrice}</span>
            </div>
          ) : (
            <div className={'d-flex justify-content-center ' + styles.priceDiv}>
              <span className={styles.normalPrice}>${price}</span>
            </div>
          )}
        </Card.Text>
        <Link to={'/product/' + id}>
          <Button variant="outline-secondary" size="sm" className="mx-1 mb-1">
            View more
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

ProductBox.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  oldPrice: PropTypes.number,
};

export default ProductBox;