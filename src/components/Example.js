import Carousel from 'react-bootstrap/Carousel';

import shirt from '../assets/images/shirt_example.png';

const Example = () => {
  // not sure why this does not work with carousel
  // const images = [
  //   {
  //     src: {shirt},
  //     alt: 'Image 1',
  //     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  //   },
  //   {
  //     src: {shirt},
  //     alt: 'Image 2',
  //     text: 'Nulla facilisi. Sed euismod mauris nec mauris tincidunt.',
  //   },
  //   {
  //     src: {shirt},
  //     alt: 'Image 3',
  //     text: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.',
  //   },
  // ];

  return (
    <div id='examples'>
      <h1 className='subheader'>
        Examples of Our Products
      </h1>
      <Carousel className='exampleShirtCarousel'>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={shirt}
            alt="First slide"></img>
          <Carousel.Caption>
            <h3>First example shirt design</h3>
            <p>This is an example shirt, created from 100% cotton and hand-made</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={shirt}
            alt="Second slide"></img>
          <Carousel.Caption>
            <h3>Second example shirt design</h3>
            <p>This is an example shirt, created from 100% cotton and hand-made</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={shirt}
            alt="Third slide"></img>
          <Carousel.Caption>
            <h3>Third example shirt design</h3>
            <p>This is an example shirt, created from 100% cotton and hand-made</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Example;