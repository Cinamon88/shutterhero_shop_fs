import React from 'react';
import { Container } from 'react-bootstrap';

const Summary = () => {
  return (
    <div className="my-5 text-center">
      <Container>
        <h1 className="py-5">Thank you for your order!</h1>
        <h2 className="py-5">
          Check you inbox in a few minutes!
        </h2>
      </Container>
    </div>
  );
};

export default Summary;