const meetingHelper = require("./utils/meeting_helper");
const meetingPayloadEnum = require("./utils/meeting_payload_enum");

const parseMessage = (message) => {
  try {
    const payload = JSON.parse(message);
    return payload;
  } catch (error) {
    return { type: meetingPayloadEnum.UNKOWN };
  }
};

const listenMessage = (meetingId, socket, meetingServer) => {
  socket.on("message", (message) =>
    handelMessage(meetingId, socket, message, meetingServer)
  );
};

const handelMessage = (meetingId, socket, message, meetingServer) => {
  var payload = "";
  if (typeof message === "string") {
    payload = parseMessage(message);
  } else {
    payload = message;
  }
  switch (payload.type) {
    case meetingPayloadEnum.JOIN_MEETING:
      meetingHelper.joinMeeting(meetingId, socket, meetingServer, payload);
      break;
    case meetingPayloadEnum.CONNECTION_REQUEST:
      meetingHelper.forwardConnectionRequest(
        meetingId,
        socket,
        meetingServer,
        payload
      );
      break;
    case meetingPayloadEnum.OFFER_SDP:
      meetingHelper.forwardOfferSDP(meetingId, socket, meetingServer, payload);
      break;
    case meetingPayloadEnum.ANSWER_SDP:
      meetingHelper.forwardAnswerSDP(meetingId, socket, meetingServer, payload);
      break;
    case meetingPayloadEnum.LEAVE_MEETING:
      meetingHelper.userLeft(meetingId, socket, meetingServer, payload);
      break;
    case meetingPayloadEnum.END_MEETING:
      meetingHelper.meetingEnd(meetingId, socket, meetingServer, payload);
      break;
    case meetingPayloadEnum.VIDEO_TOGGLE:
    case meetingPayloadEnum.AUDIO_TOGGLE:
    case meetingPayloadEnum.MESSAGE:
      meetingHelper.forwardEvent(meetingId, socket, meetingServer, payload);
      break;
    case meetingPayloadEnum.UNKOWN:
      break;
    default:
      break;
  }
};

const initMeetingServer = (server) => {
  console.log("Meeting Server Initialized");
  const meetingServer = require("socket.io")(server);
  meetingServer.on("connection", (socket) => {
    const meetingId = socket.handshake.query.id;

    listenMessage(meetingId, socket, meetingServer);
  });
};

module.exports = initMeetingServer;
