import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { API_URL } from '../../../config';
import { logIn } from '../../../redux/usersRedux';
import { useNavigate } from 'react-router-dom';
import shortid from 'shortid';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState(null); // null, 'loading, 'success', 'serverError', 'clientError'
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ email, password }),
    };

    setStatus('loading');
    fetch(`${API_URL}/auth/login`, options)
      .then((res) => {
        if (res.status === 201) {
          setStatus('success');
          return res.json();
        } else if (res.status === 400) {
          setStatus('clientError');
        } else {
          setStatus('serverError');
        }
      })
      
      .then((res) => {
        dispatch(logIn(res));
        setTimeout(() => {
          navigate('/');
        }, 3000);
      })
      .catch((err) => {
        setStatus('serverError');
      });
  };

  return (
    <Form className='col-12 col-sm-3 mx-auto mt-3' onSubmit={handleSubmit}>
      <h1 className='my-4'>Sign in</h1>

      {status === 'success' && (
        <Alert variant='success'>
          <Alert.Heading>Success!</Alert.Heading>
          <p>You have been successfully logged in!</p>
        </Alert>
      )}

      {status === 'serverError' && (
        <Alert variant='danger'>
          <Alert.Heading>Something went wrong...</Alert.Heading>
          <p>Unexpected error.. Please try again!</p>
        </Alert>
      )}

      {status === 'clientError' && (
        <Alert variant='danger'>
          <Alert.Heading>Incorrect data</Alert.Heading>
          <p>Login or password are incorrect.</p>
        </Alert>
      )}

      {status === 'loading' && (
        <Spinner animation='border' role='status' className='d-block mx-auto'>
          <span className='visually-hidden'>Loading...</span>
        </Spinner>
      )}
      {status !== 'success' && (
        <Form.Group>
          <Form.Group className='mb-3' controlId='formLogin'>
            <Form.Label>Login</Form.Label>
            <Form.Control
              type='text'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter login'
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Password'
            />
          </Form.Group>

          <Button variant='primary' type='submit'>
            Sign in
          </Button>
        </Form.Group>
      )}
    </Form>
  );
};

export default Login;
