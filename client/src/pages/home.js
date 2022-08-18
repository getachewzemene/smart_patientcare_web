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
      <h4>Address</h4>
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            title="map"
            width="800"
            height="500"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=11.586898547428781,%2037.35576551742776&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          ></iframe>
          <a href="https://123movies-a.com">Link</a>
          <br />
          <a href="https://www.embedgooglemap.net">embed map google</a>
        </div>
      </div>
      <div>Common Health Issues</div>
      <div>top doctors</div>
      <div>first aid</div>
      <Footer />
    </>
  );
};
export default home;
