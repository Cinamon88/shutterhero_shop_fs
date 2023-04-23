import React, { useState } from 'react';
import { Alert, Button, Form, Spinner } from 'react-bootstrap';
import { API_URL } from '../../../config';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState('');
  const [status, setStatus] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: login, password: password  }),
    };

    setStatus('loading');
    fetch(`${API_URL}/auth/register`, options).then((res) => {
      if (res.status === 201) {
        setStatus('success');
      } else if (res.status === 400) {
        setStatus('clientError');
      } else if (res.status === 409) {
        setStatus('emailError');
      } else {
        setStatus('serverError');
      }
      setStatus('success');
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    });
  };

  return (
    <Form className='col-12 col-sm-3 mx-auto mt-3' onSubmit={handleSubmit}>
    <h1 className='my-4'>Sign up</h1>
    {status === 'success' && (
      <Alert variant='success'>
        <Alert.Heading>Success!</Alert.Heading>
        <p>You have been successfully registered! You can now log in...</p>
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
        <Alert.Heading>Not enough data</Alert.Heading>
        <p>You have to fill all the fields.</p>
      </Alert>
    )}

    {status === 'emailError' && (
      <Alert variant='warning'>
        <Alert.Heading>Email already in use</Alert.Heading>
        <p>You have to use other email.</p>
      </Alert>
    )}

    {status === 'loading' && (
      <Spinner animation='border' role='status' className='d-block mx-auto'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    )}

    <Form.Group className='mb-3' controlId='formLogin'>
      <Form.Label>Email address</Form.Label>
      <Form.Control
        type='login'
        value={login}
        onChange={(e) => setLogin(e.target.value)}
        placeholder='Email'
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
      Submit
    </Button>
  </Form>
);
};

export default Register;