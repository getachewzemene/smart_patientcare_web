import Carousel from "../carousel/carousel";
import CardList from "../card_list/cardList";
import "./home.scss";
import NavBar from "../navbar/navbar";
import Footer from "../footer/footer";
const home = () => {
  return (
    <>
      <NavBar />
      <Carousel />
      <h3 className="consult-h3">
        Consult top doctors onlin for any health concerns
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
