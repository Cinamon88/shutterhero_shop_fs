import Container from 'react-bootstrap/Container';
import React, { useState } from 'react';
import { Alert, Button, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../../../redux/cartRedux';
import { addOrder } from '../../../redux/orderRedux';
import { useNavigate } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import styles from './OrderForm.module.scss';
import { getUser } from '../../../redux/usersRedux';

const OrderForm = () => {
  const user = useSelector(getUser);

  const [name, setName] = useState();
  const [lastName, setLastName] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [postcode, setPostcode] = useState();
  const [cart, setCart] = useState(useSelector(getCart));
  const [totalPrice, setTotalPrice] = useState(getTotalPrice());
  const [deliveryCost, setDeliveryCost] = useState(0);
  const [status, setStatus] = useState();

  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function getTotalPrice() {
    let totalPrice = 0;
    cart.map((i) => {
      totalPrice = totalPrice + i.productData.price * i.value;
    });
    return totalPrice;
  }

  const handleSubmit = () => {
    const order = {
      products: cart,
      client: {
        name: name,
        lastName: lastName,
        address: address,
        city: city,
        postcode: postcode,
        totalPrice: totalPrice,
        deliveryCost: deliveryCost,
      },
    };
    if (cart.length > 0) {
      dispatch(addOrder(order));
      setStatus('success');
      setTimeout(() => {
        navigate('/summary');
      }, 3000);
      localStorage.removeItem('cart');
    } else {
      setStatus('error');
    }
  };

  return (
    <div className={styles.orderform}>
      <Container>
        <h1 className={styles.title}>Order</h1>
        <Form onSubmit={validate(handleSubmit)}>
          <Row>
            <Col md={12} lg={8}>
              <Row>
                <Form.Group as={Col} className={styles.form}>
                  <Form.Label>Name*</Form.Label>
                  <Form.Control
                    {...register('name', {
                      required: true,
                      minLength: 2,
                      maxLength: 15,
                    })}
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                  />
                  {errors.name && (
                    <small className="d-block form-text text-danger mt-2">
                      This field is required.
                    </small>
                  )}
                </Form.Group>
                <Form.Group as={Col} className={styles.form}>
                  <Form.Label>Last name*</Form.Label>
                  <Form.Control
                    {...register('lastname', {
                      required: true,
                      minLength: 2,
                      maxLength: 20,
                    })}
                    type="text"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  {errors.lastname && (
                    <small className="d-block form-text text-danger mt-2">
                      This field is required.
                    </small>
                  )}
                </Form.Group>
              </Row>
              <Form.Group as={Col} className={styles.form}>
                <Form.Label>Address</Form.Label>
                <Form.Control
                  {...register('address', {
                    required: false,
                    minLength: 2,
                    maxLength: 40,
                  })}
                  type="text"
                  onChange={(e) => setAddress(e.target.value)}
                />
                {errors.address && (
                  <small className="d-block form-text text-danger mt-2">
                    This field is required.
                  </small>
                )}
              </Form.Group>
              <Row>
                <Form.Group as={Col} className={styles.form}>
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    {...register('city', {
                      required: false,
                      minLength: 2,
                      maxLength: 40,
                    })}
                    type="text"
                    onChange={(e) => setCity(e.target.value)}
                  />
                  {errors.city && (
                    <small className="d-block form-text text-danger mt-2">
                      This field is required.
                    </small>
                  )}
                </Form.Group>
                <Form.Group as={Col} className={styles.form}>
                  <Form.Label>Postcode</Form.Label>
                  <Form.Control
                    {...register('postcode', {
                      required: false,
                      minLength: 2,
                      maxLength: 40,
                    })}
                    onChange={(e) => setPostcode(e.target.value)}
                  />
                  {errors.postcode && (
                    <small className="d-block form-text text-danger mt-2">
                      This field is required.
                    </small>
                  )}
                </Form.Group>{' '}
                <Form.Group as={Col} className={styles.form}>
                  <Form.Label>Email*</Form.Label>
                  <Form.Control
                    {...register('email', {
                      required: true,
                      minLength: 2,
                      maxLength: 40,
                    })}
                    onChange={(e) => setPostcode(e.target.value)}
                  />
                  {errors.postcode && (
                    <small className="d-block form-text text-danger mt-2">
                      This field is required.
                    </small>
                  )}
                </Form.Group>{' '}
                <Form.Group className="mb-3" id="formCheckbox">
                  <Form.Check
                    {...register('checkbox', {
                      required: true,
                    })}
                    label="I accept the terms of delivery"
                    feedbackType="invalid"
                  />
                  {errors.checkbox && (
                    <small className="d-block form-text text-danger mt-2">
                      You must agree before submitting
                    </small>
                  )}
                </Form.Group>
              </Row>
            </Col>
            <Col md={12} lg={4} className={styles.info}>
              <p>Your order:</p>
              {cart
                ? cart.map((product) => {
                    return (
                      <div className={'d-flex justify-content-between mb-1'}>
                        <p>
                          <FiChevronRight /> {product.productData.name}
                        </p>
                        <p>Quantity: {product.value}</p>
                        <p>
                          Price: {product.productData.price * product.value}$
                        </p>
                      </div>
                    );
                  })
                : ''}
              <h4>Price for products: {totalPrice}£</h4>
              <span>Delivery method</span>
              <Form.Group className="my-1">
                <Form.Check
                  className="my-2"
                  label="Collection"
                  name="delivery"
                  type="radio"
                  id={`1`}
                  onChange={() => setDeliveryCost(0)}
                  defaultChecked={true}
                />
                <Form.Check
                  className="my-1"
                  label="Send by mail 10£"
                  name="delivery"
                  type="radio"
                  id={`3`}
                  value={15}
                  onChange={() => setDeliveryCost(15)}
                />
                <Form.Check
                  className="my-1"
                  label="Send by courier 15£"
                  name="delivery"
                  type="radio"
                  id={`4`}
                  value={25}
                  onChange={() => setDeliveryCost(25)}
                />
              </Form.Group>
              <h3 className="mt-3">
                Total Price: {totalPrice + deliveryCost}£
              </h3>
              {user ? (
                <Button variant="outline-secondary" type="submit">
                  Submit your order
                </Button>
              ) : (
                <p>Log in to confirm your order</p>
              )}
            </Col>
          </Row>
        </Form>
        {status === 'success' && (
          <Alert variant="success" className="mt-3">
            <Alert.Heading>Success!</Alert.Heading>
            <p>You have placed the order! Thank you!</p>
          </Alert>
        )}{' '}
        {status === 'error' && (
          <Alert variant="danger" className="mt-3">
            <Alert.Heading>Something is wrong!</Alert.Heading>
            <p>Your shopping cart is empty!</p>
          </Alert>
        )}
      </Container>
    </div>
  );
};

export default OrderForm;