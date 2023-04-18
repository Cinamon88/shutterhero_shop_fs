import React, { useState } from 'react';
import { Alert, Button, Form, Spinner } from 'react-bootstrap';
import { API_URL } from '../../../config';

const Register = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: login, password: password, email: email }),
    };

    setStatus('loading');
    fetch(`${API_URL}auth/register`, options).then((res) => {
      if (res.status === 201) {
        setStatus('success');
      } else if (res.status === 400) {
        setStatus('clientError');
      } else if (res.status === 409) {
        setStatus('loginError');
      } else {
        setStatus('serverError');
      }
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

    {status === 'loginError' && (
      <Alert variant='warning'>
        <Alert.Heading>Login already in use</Alert.Heading>
        <p>You have to use other login.</p>
      </Alert>
    )}

    {status === 'loading' && (
      <Spinner animation='border' role='status' className='d-block mx-auto'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    )}

    <Form.Group className='mb-3' controlId='formLogin'>
      <Form.Label>Login</Form.Label>
      <Form.Control
        type='text'
        value={login}
        onChange={(e) => setLogin(e.target.value)}
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

    <Form.Group className='mb-3' controlId='formemail'>
      <Form.Label>Email address</Form.Label>
      <Form.Control
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Email'
      />
    </Form.Group>

    <Button variant='primary' type='submit'>
      Submit
    </Button>
  </Form>
);
};

export default Register;