import Carousel from "react-bootstrap/Carousel";
import "./carousel.scss";
const carousel = () => {
  return (
    <Carousel className="carousel slide bg-dark vh-80" variant="light">
      <Carousel.Item interval={1000}>
        <img
          className="img-fluid w-80 vh-80 rounded mx-auto d-block"
          src="./logo512.png"
          alt="First slide"
        />

        <Carousel.Caption>
          <h3>Services</h3>
          <p className="text-white h3">
            The most valubale thing is your health
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="img-fluid w-80 vh-80 rounded mx-auto d-block"
          src="./logo512.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>top doctors</h3>
          <p>consult online health specialists</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-fluid w-80 vh-80 rounded mx-auto d-block"
          src="./logo512.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>request appointments </h3>
          <p>request appointments remotely throug online</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default carousel;
