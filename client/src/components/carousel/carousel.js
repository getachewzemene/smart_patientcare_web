import Carousel from "react-bootstrap/Carousel";
import "./carousel.scss";
const carousel = () => {
  return (
    <Carousel className="carousel slide bg-dark vh-80" variant="light">
      <Carousel.Item interval={1000}>
        <img
          className=" vw-100 vh-20"
          src="./assets/online_chat.jpg"
          alt="First slide"
        />

        <Carousel.Caption>
          <h3 className="text-primary">Services</h3>
          <p className="text-primary h3">
            The most valubale thing is your health
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="img-fluid vw-100 vh-20"
          src="./assets/top_doctors.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className="text-primary">top doctors</h3>
          <p className="text-primary">consult online health specialists</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="vw-100 vh-20"
          src="./assets/online_doctor.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 className="text-primary">request appointments </h3>
          <p className="text-primary">
            request appointments remotely throug online
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=" vw-100 vh-20"
          src="./assets/video_call.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 className="text-primary">Video Call </h3>
          <p className="text-primary">
            consult doctors remotely using video call
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default carousel;
