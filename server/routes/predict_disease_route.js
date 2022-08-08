const express = require("express");
const router = express.Router();
const diseasePredictionController = require("../controller/disease_prediction_controller");
router.get("/predict-disease", diseasePredictionController);

module.exports = router;
