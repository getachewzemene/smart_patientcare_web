const express = require("express");
const router = express.Router();
const sequelize = require("../config/mysql_config");
const meetingController = require("../controller/meeting_controller");
router.get("/api/model", async (req, res) => {
  try {
    await sequelize.sync({ force: true });
    res.status(200).send("meeting and user table are created success");
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});
router.post("/api/meeting/start", meetingController.startMeeting);
// router.post("/api/meeting/join", meetingController.joinMeeting);
router.get("/api/meeting/join/:id", meetingController.checkMeetingExists);
router.get("/api/meeting/meetingusers", meetingController.getAllMeetingUsers);

module.exports = router;
