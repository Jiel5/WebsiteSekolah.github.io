import Carousel from 'react-bootstrap/Carousel';
import hero6 from './../Assets/hero6.jpg';
import hero3 from './../Assets/hero3.jpg';
import hero5 from './../Assets/hero5.jpg';

const Hero = ()=> {

  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={hero6}
          alt="First slide"
          style={{ height: '700px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={hero3}
          alt="Second slide"
          style={{ height: '700px', objectFit: 'cover' }}
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={hero5}
          alt="Third slide"
          style={{ height: '700px', objectFit: 'cover' }}
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default Hero;
