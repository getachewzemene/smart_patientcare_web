import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
  faMicrophone,
  faPhone,
  faAngleUp,
  faClosedCaptioning,
  faDesktop,
  // faMicrophoneSlash,
} from "@fortawesome/free-solid-svg-icons";
import "./video-call-footer.scss";
const videoCallFooter = () => {
  return (
    <div className="footer-item">
      <div className="left-item">
        <div className="icon-block">
          <p>Meeting details</p>
          <FontAwesomeIcon className="icon-angle" icon={faAngleUp} />
        </div>
      </div>
      <div className="center-item">
        <div className="icon-block">
          <FontAwesomeIcon className="icon" icon={faMicrophone} />
        </div>
        <div className="icon-block">
          <FontAwesomeIcon className="icon red" icon={faPhone} />
        </div>
        <div className="icon-block">
          <FontAwesomeIcon className="icon" icon={faVideo} />
        </div>
      </div>
      <div className="right-item">
        <div className="icon-block">
          <FontAwesomeIcon className="icon red" icon={faClosedCaptioning} />
          <p className="title">Turn on Captions</p>
        </div>
        <div className="icon-block">
          <FontAwesomeIcon className="icon red" icon={faDesktop} />
          <p className="title">Present Now</p>
        </div>
      </div>
    </div>
  );
};
export default videoCallFooter;
