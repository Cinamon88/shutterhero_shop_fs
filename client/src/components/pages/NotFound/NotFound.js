import Row from 'react-bootstrap/Row';
import styles from './NotFound.module.scss';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <Row>
        <Col className="col text-center">
            <p className={styles.NotFound}>404</p>
            <p>Website doesn't exist.</p>
            <Link className="text-center" to="/">Return to Home Page</Link>
        </Col>
      </Row>
    </>
  );
};

export default NotFound;