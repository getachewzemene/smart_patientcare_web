import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserFriends,
  faCommentAlt,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./video-call-header.scss";
const videoCallHeader = () => {
  return (
    <>
      <div className="frame-header">
        <div className="header-items icon-block">
          <FontAwesomeIcon className="icon" icon={faUserFriends} />
        </div>
        <div className="header-items icon-block">
          <FontAwesomeIcon className="icon" icon={faCommentAlt} />
          <span className="alert-circle-icon"></span>
        </div>
        <div className="header-items date-block">12:00 PM</div>
        <div className="header-items icon-block">
          <FontAwesomeIcon className="icon profile" icon={faUserCircle} />
        </div>
      </div>
    </>
  );
};
export default videoCallHeader;
