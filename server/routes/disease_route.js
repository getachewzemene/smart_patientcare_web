const express = require("express");
const router = express.Router();
const diseaseController = require("../controller/disease_controller");
router.get("/all", diseaseController.getAllDisease);
router.get("/by-name", diseaseController.getDiseaseByName);
module.exports = router;
