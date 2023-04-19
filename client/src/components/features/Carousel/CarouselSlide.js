import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from './CarouselSlide.module.scss';
import Button from 'react-bootstrap/Button';

const CarouselSlide = () => {
    return (
        <Carousel className={styles.carousel}>
            <Carousel.Item>
                <img
                    className="d-block w-100 "
                    src=".\images\photo1.jpg"
                    alt="Camera"
                />
                <Carousel.Caption className='align-items-center'>
                    <div className={styles.content}>
                        <h2>Cameras</h2>
                        <p>The best choices!</p>
                        <Button variant="light">
                            Have a look!
                        </Button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src=".\images\photo2.jpg"
                    alt="Lenses"
                />

                <Carousel.Caption>
                    <div className={styles.content}>
                        <h2>Lenses</h2>
                        <p>Best choices!</p>
                        <Button variant="light">
                            Have a look!
                        </Button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src=".\images\photo3.jpg"
                    alt="Accessories"
                />

                <Carousel.Caption>
                    <div className={styles.content}>
                        <h2>Accessories</h2>
                        <p>Everything you need!</p>
                        <Button variant="light">
                            Have a look!
                        </Button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselSlide;