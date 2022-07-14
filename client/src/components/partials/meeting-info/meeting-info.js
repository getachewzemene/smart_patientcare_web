import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCopy,
  faTimes,
  faUser,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./meeting-info.scss";
const MeetingInfo = ({ setMeetingInfoPopup, url }) => {
  return (
    <div className="meeting-info-block">
      <div className="meeting-header">
        <h3>Your meeting's ready</h3>
        <FontAwesomeIcon
          className="icon"
          icon={faTimes}
          onClick={() => {
            setMeetingInfoPopup(false);
          }}
        />
      </div>
      <button className="add-people-btn">
        <FontAwesomeIcon className="icon" icon={faUser} />
        Add Others
      </button>
      <p>Or share this meeting link with others you want in the meeting</p>
      <div className="meeting-link">
        <span>{url}</span>
        <FontAwesomeIcon
          className="icon"
          icon={faCopy}
          onClick={() => navigator.clipboard.writeText(url)}
        />
      </div>
      <div className="permission-text">
        <FontAwesomeIcon className="icon" icon={faShieldAlt} />
        <p>
          people who use this meeting link must get your permission before they
          can join.
        </p>
      </div>
      <p className="small-text">Joined as getchze1221@gmail.com</p>
    </div>
  );
};
export default MeetingInfo;
