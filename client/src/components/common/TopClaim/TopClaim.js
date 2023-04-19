import React from 'react';
import styles from './TopClaim.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const CompanyClaim = () => (
  <div className={styles.root}>
    <div class="container">
        <div class="row align-items-center">
            <div className={`col-6 col-md-4 text-center ${styles.phoneNumber}`}>
                <p>
                    <FontAwesomeIcon className={styles.icon} icon={faMobileAlt} /> 
                    692 712 014
                </p>
            </div>
            <div className="col-6 col-md-4 text-center">
                <a href='#'>
                    <img src='/images/logo.png' alt='ShutterHero' />
                </a>
            </div>
            <div className={`col-6 col-md-4 text-center ${styles.cart}`}>
                <Link to={`/cart`}>
                    <a href='#' className={styles.cartBox}>
                        <div className={styles.cartIcon}>
                            <FontAwesomeIcon className={styles.icon} icon={faShoppingBasket} />
                        </div>
                        <div className={styles.cartCounter}>
                            123
                        </div>
                    </a>
                </Link>
            </div>
        </div>
    </div>
  </div>
);

export default CompanyClaim;


/* <div className='container'>
      <div className='row'>
        <div className={`col ${styles.phoneNumber}`}>
          <p>
            <FontAwesomeIcon className={styles.icon} icon={faMobileAlt} /> 692 712 014
          </p>
        </div>
        <Link to={`/cart`}>
          {
            <div className={`col ${styles.cart}`}>
              <a href='#' className={styles.cartBox}>
                <div className={styles.cartIcon}>
                  <FontAwesomeIcon className={styles.icon} icon={faShoppingBasket} />
                </div>
                <div className={styles.cartCounter}>123</div>
              </a>
            </div>
          }
        </Link>
        <div className='col'>
          <a href='#'>
            <img src='/images/logo.png' alt='ShutterHero' />
          </a>
        </div>
        
      </div>
    </div>
*/