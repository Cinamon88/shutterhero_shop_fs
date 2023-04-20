import React, { useState } from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getCart } from '../../../redux/cartRedux';
import styles from './Cart.module.scss';
import { TiDelete } from 'react-icons/ti';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [cartData, setCartData] = useState(useSelector(getCart));
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('user')) || 0,
  );

  const handleDelete = (id) => {
    let cart = JSON.parse(localStorage.getItem('cart'));
    let tempCart = cart.filter((item) => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(tempCart));
    setCartData(tempCart);
  };
  function getTotalPrice() {
    let totalPrice = 0;
    // eslint-disable-next-line array-callback-return
    cartData.map((product) => {
      totalPrice = totalPrice + product.productData.price * product.value;
    });
    return totalPrice;
  }
  return (
    <Container className={styles.cart}>
      <h1 className={styles.title}>Cart</h1>
      <Row>
        <Col lg={9}>
          <Table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Amount</th>
                <th>Price</th>
                <th>Comment</th>
                <th></th>
              </tr>
            </thead>

            {cartData.length === 0 ? (
              <h2 className="py-5">Cart is empty</h2>
            ) : (
              cartData.map((product) => {
                return (
                  <tbody>
                    <tr>
                      <td>
                        <img
                          src={`../images/products/${product.productData.image}`}
                          alt="cameras"
                          className={'d-block ' + styles.left_image}
                        />
                      </td>
                      <td className="col-2 py-5">{product.productData.name}</td>
                      <td className="col-1 py-5 px-4">{product.value}</td>
                      <td className="col-1 py-5">
                        {product.productData.price * product.value}£
                      </td>
                      <td className="col-2 py-5">
                        {product.comment.length > 0 ? (
                          product.comment
                        ) : (
                          <p>No Comment</p>
                        )}
                      </td>
                      <td className={'col-1 py-5 ' + styles.icon}>
                        <button
                          onClick={() => handleDelete(product.id)}
                          className={styles.button}
                        >
                          <TiDelete className={styles.icon} />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                );
              })
            )}
          </Table>
        </Col>
        {cartData.length === 0 ? (
          <></>
        ) : (
          <Col className={styles.summary} lg={3}>
            <h3>Summary</h3>
            <h5>Total price: {getTotalPrice()}£</h5>
            {user ? (
              <Link className={styles.link} to="/order">
                <Button
                  type="submit"
                  variant="outline-secondary"
                  size="lg"
                  className="mx-3 my-4 "
                >
                  Order
                </Button>
              </Link>
            ) : (
              <p>Log in to confirm your order</p>
            )}
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default Cart;