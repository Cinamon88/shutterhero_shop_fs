import React from 'react';
import styles from './TopClaim.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUser } from '../../../redux/usersRedux';


const TopClaim = () => {

    return (
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
                        <Link to='/'>
                            <img src='/images/logo.png' alt='ShutterHero' />
                        </Link>
                    </div>
                    <div className={`col-6 col-md-4 text-center ${styles.cart}`}>
                        <Link to={`/cart`}>
                            <p className={styles.cartBox}>
                                <div className={styles.cartIcon}>
                                    <FontAwesomeIcon className={styles.icon} icon={faShoppingBasket} />
                                </div>
                                <div className={styles.cartCounter}>
                                    123
                                </div>
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopClaim;