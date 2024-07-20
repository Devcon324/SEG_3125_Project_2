import Carousel from 'react-bootstrap/Carousel';
import Sweater_doom from '../assets/images/Sweater_doom.jpg';
import Tshirt_coding from '../assets/images/Tshirt_coding.jpg';
import Tshirt_elden from '../assets/images/Tshirt_elden.webp';
// import styles
import '../styles/Example.css';

const Example = () => {
  return (
    <div id='examples'>
      <h1 className='subheader'>
        Examples of Our Products
      </h1>
      <Carousel className='exampleShirtCarousel'>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Sweater_doom}
            alt="First slide"></img>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Tshirt_coding}
            alt="Second slide"></img>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Tshirt_elden}
            alt="Third slide"></img>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Example;