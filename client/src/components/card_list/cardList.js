import Row from "react-bootstrap/Row";
import CustomeCard from "../card/card";
import "./cardList.scss";
const cardList = () => {
  const services = [
    {
      name: "video consultation",
      image: "./assets/video_call.jpg",
    },
    { name: "appointment", image: "./assets/appointment_doctor.jpeg" },
    {
      name: "Disease Prediction",
      image: "./assets/disease_prediction.webp",
    },
    { name: "Online Treatment", image: "./assets/online_consultation.jpg" },
    {
      name: "Consult Specialists remotely",
      image: "./assets/top_doctors.jpg",
    },
    { name: "Remote Medication", image: "./assets/online_medication.jpeg" },
  ];
  return (
    <Row className="my-5 mx-0">
      <CustomeCard args={services}></CustomeCard>
    </Row>
  );
};
export default cardList;
