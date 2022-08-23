import Row from "react-bootstrap/Row";
import CustomeCard from "../card/card";
import "./cardList.scss";
const cardList = () => {
  const services = [
    {
      name: "video consultation",
      image: "./assets/video_call.jpg",
      description: "consult health specialists remotely using vidoe conference",
    },
    {
      name: "Online appointment",
      image: "./assets/appointment_doctor.jpeg",
      description: "book an appointment remotely and consult doctors",
    },
    {
      name: "Disease Prediction",
      image: "./assets/disease_prediction.webp",
      description: "predict disease with using machine learning and Tensorflow",
    },
    {
      name: "Online Treatment",
      image: "./assets/online_consultation.jpg",
      description: "get treatment online with out going trough hospitals",
    },
    {
      name: "Consult Specialists remotely",
      image: "./assets/top_doctors.jpg",
      description:
        "consulte top health specialists remotely for any health problem",
    },
    {
      name: "Remote Medication",
      image: "./assets/online_medication.jpeg",
      description:
        "get remote medication and other health related stuffs throug the power of modern technology",
    },
  ];
  return (
    <Row className="my-5 mx-0">
      <CustomeCard args={services}></CustomeCard>
    </Row>
  );
};
export default cardList;
