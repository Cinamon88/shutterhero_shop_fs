import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import styles from './Amount.module.scss';

const Amount = (props) => {
  const [value, setValue] = useState(1);

  const addItem = () => {
    if (value <= 9) {
      setValue(value + 1);
    }
  };
  const removeItem = () => {
    if (value >= 2) {
      setValue(value - 1);
    }
  };

  useEffect(() => {
    props.onClick(value);
  }, [value]);

  return (
    <div className="d-flex flex-row">
      <h4>Amount:</h4>
      <div className={'d-flex ' + styles.amount}>
        <Button
          onClick={() => {
            removeItem();
          }}
          variant="outline-dark"
        >
          -
        </Button>
        <input
          type="text"
          value={value}
          readOnly
          className={'text-center ' + styles.input}
        />
        <Button
          onClick={() => {
            addItem();
          }}
          variant="outline-dark"
        >
          +
        </Button>
      </div>
    </div>
  );
};

export default Amount;