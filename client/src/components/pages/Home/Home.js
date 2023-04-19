import { Row, Col } from "react-bootstrap";
import CarouselSlide from "../../features/Carousel/CarouselSlide";

const Home = () => {
    return (
        <>
            <CarouselSlide />
            <Row className='justify-content-end align-items-center my-5'>
                <Col className=''>
                    <h1 className=''>Shop</h1>
                </Col>
            </Row>
        </>
    )
}

export default Home;