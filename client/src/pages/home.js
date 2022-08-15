import Carousel from "../components/carousel/carousel";
import CardList from "../components/card_list/cardList";
import "./home.scss";
import NavBar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
const home = () => {
  return (
    <>
      <NavBar />
      <Carousel className="custom-carousel" />
      <h3 className="consult-h3">
        Consult top doctors online for any health concerns
      </h3>
      <CardList />
      <div>Common Health Issues</div>
      <div>top doctors</div>
      <div>first aid</div>
      <Footer />
    </>
  );
};
export default home;
