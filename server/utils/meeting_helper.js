const meetingService = require("../services/meeting_service");
const MeetingPayloadEnum = require("./meeting_payload_enum");
const joinMeeting = async (meetingId, socket, meetingServer, payload) => {
  const { userId, name } = payload.data;
  meetingService.isMeetingPresent(meetingId, async (error, results) => {
    if (error && !results) {
      sendMessage(socket, {
        type: MeetingPayloadEnum.NOT_FOUND,
      });
    }
    if (results) {
      addUser(socket, { meetingId, userId, name }).then(
        (result) => {
          if (result) {
            sendMessage(socket, {
              type: MeetingPayloadEnum.JOINED_MEETING,
              data: { userId },
            });

            broadCastUsers(meetingId, socket, meetingServer, {
              type: MeetingPayloadEnum.USER_JOINED,
              data: {
                userId,
                name,
                ...payload.data,
              },
            });
          }
        },
        (error) => {
          console.log(error);
        }
      );
    }
  });
};

const addUser = (socket, { meetingId, userId, name }) => {
  let promise = new Promise((resolve, reject) => {
    meetingService.getMeetingUser({ meetingId, userId }, (error, results) => {
      if (!results) {
        const model = {
          userId: userId,
          name: name,
          socketId: socket.id,
          joined: true,
          isAlive: true,
          meetingId: meetingId,
        };
        meetingService.joinMeeting(model, (error, results) => {
          if (results) {
            resolve(true);
          }

          if (error) {
            reject(error);
          }
        });
      } else {
        meetingService.updateMeetingUser(
          {
            userId: userId,
            socketId: socket.id,
          },
          (error, results) => {
            if (results) {
              resolve(true);
            }
            if (error) {
              reject(error);
            }
          }
        );
      }
    });
  });
  return promise;
};

const forwardConnectionRequest = (
  meetingId,
  socket,
  meetingServer,
  payload
) => {
  const { userId, otherUserId, name } = payload.data;

  meetingService.getMeetingUser(meetingId, otherUserId, (error, results) => {
    if (results) {
      const sendPayload = JSON.stringify({
        type: MeetingPayloadEnum.CONNECTION_REQUEST,
        data: {
          userId,
          name,
          ...payload.data,
        },
      });
      meetingServer.to(results.socketId).emit("message", sendPayload);
    }
  });
};

const forwardIceCandidate = (meetingId, socket, meetingServer, payload) => {
  const { userId, otherUserId, candidate } = payload.data;

  meetingService.getMeetingUser(meetingId, otherUserId, (error, results) => {
    if (results) {
      const sendPayload = JSON.stringify({
        type: MeetingPayloadEnum.ICECANDIDATE,
        data: {
          userId,
          candidate,
          ...payload.data,
        },
      });
      meetingServer.to(results.socketId).emit("message", sendPayload);
    }
  });
};

const forwardOfferSDP = (meetingId, socket, meetingServer, payload) => {
  const { userId, otherUserId, sdp } = payload.data;

  meetingService.getMeetingUser(meetingId, otherUserId, (error, results) => {
    if (results) {
      const sendPayload = JSON.stringify({
        type: MeetingPayloadEnum.OFFER_SDP,
        data: {
          userId,
          sdp,
          ...payload.data,
        },
      });
      meetingServer.to(results.socketId).emit("message", sendPayload);
    }
  });
};

const forwardAnswerSDP = (meetingId, socket, meetingServer, payload) => {
  const { userId, otherUserId, sdp } = payload.data;

  meetingService.getMeetingUser(meetingId, otherUserId, (error, results) => {
    if (results) {
      const sendPayload = JSON.stringify({
        type: MeetingPayloadEnum.ANSWER_SDP,
        data: {
          userId,
          sdp,
          ...payload.data,
        },
      });
      meetingServer.to(results.socketId).emit("message", sendPayload);
    }
  });
};

const userLeft = (meetingId, socket, meetingServer, payload) => {
  const { userId } = payload.data;
  broadCastUsers(meetingId, socket, meetingServer, {
    type: MeetingPayloadEnum.USER_LEFT,
    data: {
      userId: userId,
    },
  });
};

const meetingEnd = (meetingId, socket, meetingServer, payload) => {
  const { userId } = payload.data;
  broadCastUsers(meetingId, socket, meetingServer, {
    type: MeetingPayloadEnum.MEETING_ENDED,
    data: {
      userId: userId,
    },
  });
  meetingService.getAllMeetingUsers(meetingId, (error, results) => {
    for (let i = 0; i < results.length; i++) {
      const meetingUser = results[i];
      meetingServer.sockets.connected[meetingUser.socketId].disconnect();
    }
  });
};
const forwardEvent = (meetingId, socket, meetingServer, payload) => {
  const { userId } = payload.data;
  broadCastUsers(meetingId, socket, meetingServer, {
    type: payload.type,
    data: {
      userId: userId,
      ...payload.data,
    },
  });
  meetingService.getAllMeetingUsers(meetingId, (error, results) => {
    for (let i = 0; i < results.length; i++) {
      const meetingUser = results[i];
      meetingServer.sockets.connected[meetingUser.socketId].disconnect();
    }
  });
};

const sendMessage = (socket, patload) => {
  socket.send(JSON.stringify(patload));
};

const broadCastUsers = (meetingId, socket, meetingServer, payload) => {
  socket.broadcast.emit("message", JSON.stringify(payload));
};

module.exports = {
  joinMeeting,
  forwardConnectionRequest,
  forwardIceCandidate,
  forwardOfferSDP,
  forwardAnswerSDP,
  userLeft,
  meetingEnd,
  forwardEvent,
};
