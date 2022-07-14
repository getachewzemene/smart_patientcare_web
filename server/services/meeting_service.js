const meetingModel = require("../models/meeting");
const userModel = require("../models/user");

const getAllMeetingUsers = async (meetingId, callBack) => {
  try {
    const meetingUsers = await userModel.findAll({
      where: {
        meetingHostId: meetingId,
      },
    });
    return callBack(meetingUsers);
  } catch (err) {
    return callBack(err);
  }
};
const startMeeting = async (params, callBack) => {
  try {
    const createMeeting = await meetingModel.create(params);
    return callBack(null, createMeeting);
  } catch (error) {
    return callBack(null, error);
  }
};
const joinMeeting = async (params, callBack) => {
  const { userId, name, socketId, joined, isAlive, meetingId } = params;
  try {
    const joinMeeting = await userModel.create({
      userId: userId,
      name: name,
      socketId: socketId,
      joined: joined,
      isAlive: isAlive,
      meetingId: meetingId,
    });
    console.log(JSON.stringify(joinMeeting));
    return callBack(null, joinMeeting);
  } catch (error) {
    return callBack(null, error);
  }
};
const updateMeetingUser = async (params, callBack) => {
  const { userId } = params;
  try {
    const updateUser = await userModel.update({
      where: {
        userId: userId,
      },
    });
    return callBack(null, updateUser);
  } catch (error) {
    return callBack(error);
  }
};
const checkMeetingExist = async (meetingId, callBack) => {
  try {
    const checkMeeting = await meetingModel.findOne({
      where: {
        id: meetingId,
      },
      include: userModel,
    });
    if (!checkMeeting) return callBack("meeting not exist");
    return callBack(null, checkMeeting);
  } catch (error) {
    return callBack(error);
  }
};

const isMeetingPresent = async (meetingId) => {
  try {
    const isMeeting = await meetingModel.findOne({
      where: {
        id: meetingId,
      },
    });
    if (isMeeting == null) return false;
    console.log(isMeeting);
    return true;
  } catch (error) {
    return false;
  }
};

const getMeetingUser = async (meetingId, userId, callBack) => {
  try {
    const user = await userModel.findOne({
      where: {
        userId: userId,
        meetingId: meetingId,
      },
    });
    return callBack(null, user);
  } catch (error) {
    return callBack(error);
  }
};

const getUserBySocketId = async (params, callBack) => {
  const { meetingId, socketId } = params;
  try {
    const socketUser = await userModel.findOne({
      where: {
        meetingId: meetingId,
        socketId: socketId,
      },
    });
    return callBack(null, socketUser);
  } catch (error) {
    return callBack(error);
  }
};

module.exports = {
  getAllMeetingUsers,
  startMeeting,
  joinMeeting,
  checkMeetingExist,
  isMeetingPresent,
  getMeetingUser,
  updateMeetingUser,
  getUserBySocketId,
};
