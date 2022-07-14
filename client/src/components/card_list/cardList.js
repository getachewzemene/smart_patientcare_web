import Row from "react-bootstrap/Row";
import CustomeCard from "../card/card";
import "./cardList.scss";
const cardList = () => {
  const services = [
    {
      name: "video consultation",
      image: "./asstes/logo192.png",
    },
    { name: "appointment", image: "./assets/logo192.png" },
    {
      name: "video consultation",
      image: "./asstes/logo192.png",
    },
    { name: "appointment", image: "./assets/logo192.png" },
    {
      name: "video consultation",
      image: "./asstes/logo192.png",
    },
    { name: "appointment", image: "./assets/logo192.png" },
  ];
  return (
    <Row className="row">
      <CustomeCard args={services}></CustomeCard>
    </Row>
  );
};
export default cardList;
