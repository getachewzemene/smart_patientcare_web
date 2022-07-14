const meetingService = require("../services/meeting_service");

const startMeeting = (req, res, next) => {
  const { hostName, hostId } = req.body;
  const model = {
    hostId: hostId,
    hostName: hostName,
    startTime: Date.now(),
  };
  meetingService.startMeeting(model, (error, results) => {
    if (error) return next(error);
    return res.status(200).send({
      message: "meeting created Success",
      data: results,
    });
  });
};
const joinMeeting = async (req, res, next) => {
  const { name, socketId, joined, isAlive, meetingId } = req.body;
  const model = {
    name: name,
    socketId: socketId,
    joined: joined,
    isAlive: isAlive,
    meetingId: meetingId,
  };
  var isMeeting = await meetingService.isMeetingPresent(meetingId);
  if (isMeeting == true) {
    meetingService.joinMeeting(model, (error, results) => {
      if (error) return next(error);
      return res.status(200).send({
        message: "meeting user created Success",
        data: results,
      });
    });
  } else {
    return res.status(400).send({ message: "meeting not found" });
  }
};
const checkMeetingExists = (req, res, next) => {
  const meetingId = req.params.id;
  meetingService.checkMeetingExist(meetingId, (error, results) => {
    if (error) return next(error);
    return res.status(200).send({
      message: "Meeting exists",
      data: results,
    });
  });
};
const getAllMeetingUsers = (req, res, next) => {
  const { meetingId } = req.params;
  meetingService.getAllMeetingUsers(meetingId, (error, results) => {
    if (error) return next(error);
    return res.status(200).send({
      message: "Meeting Users",
      data: results,
    });
  });
};
module.exports = {
  startMeeting,
  joinMeeting,
  checkMeetingExists,
  getAllMeetingUsers,
};
