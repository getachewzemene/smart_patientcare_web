const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: "1000000" },
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const mimeType = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(path.extname(file.originalname));

    if (mimeType && extname) {
      return cb(null, true);
    }
    cb("Give proper files formate to upload");
  },
}).single("file");

const controller = require("../controller/admin_controller");
const diseaseController = require("../controller/disease_controller");
// router.post("/create", controller.createAdmin);
// router.get("/socket-api/get-call-id/:id", controller.getCallId);
router.post("/add-doctor", upload, controller.addDoctor);
router.post("/add-disease", controller.addDisease);
router.post("/create-schedule", controller.createSchedule);
// router.get('/doctors');
// router.get('/patients');
// router.get('/appointments');
router.get("/disease", diseaseController.getAllDisease);
module.exports = router;
