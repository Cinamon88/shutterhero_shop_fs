import TopClaim from '../../common/TopClaim/TopClaim';
import Carousel from '../../features/Carousel/CarouselSlide';
import NavBar from '../NavBar/NavBar'

const Header = () => {
  return (
    <>
    <NavBar />
    <TopClaim />
    <Carousel />
    </>
  );
};

export default Header;