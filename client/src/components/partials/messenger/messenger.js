import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faUserFriends,
  faCommentAlt,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import "./messenger.scss";
const messenger = () => {
  return (
    <div className="messenger-container">
      <div className="messenger-header">
        <h3>Meeting Details</h3>
        <FontAwesomeIcon className="icon" icon={faTimes} />
      </div>
      <div className="messenger-header-tabs">
        <div className="tab">
          <FontAwesomeIcon className="icon" icon={faUserFriends} />
          <p>People (1)</p>
        </div>
        <div className="tab active">
          <FontAwesomeIcon className="icon" icon={faCommentAlt} />
          <p>Chat</p>
        </div>
      </div>
      <div className="chat-section">
        <div className="chat-section">
          <div className="sender">
            you <small>10 PM</small>
          </div>
          <p className="msg">Here comes an actual message</p>
        </div>
      </div>
      <div className="send-msg-section">
        <input placeholder="send message to every one" />
        <FontAwesomeIcon className="icon" icon={faPaperPlane} />
      </div>
    </div>
  );
};
export default messenger;
