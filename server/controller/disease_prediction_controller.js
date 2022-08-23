// const tf = require("@tensorflow/tfjs");
const tf = require("@tensorflow/tfjs-node");
const decodeDisease = require("../utils/disease_encoder_decoder");
const convertedSymptomArray = require("../utils/symptom_converter");
const db = require("../models");
const diseasePredictionController = async (req, res) => {
  const symptoms = req.query.symptoms;
  // console.log(symptoms);
  const symptomTensor = convertedSymptomArray(symptoms);
  const model = tf
    .loadLayersModel("file://./node_tfmodel/model.json")
    .then((predictionModel) => {
      // console.log("tf model loaded");
      const input = tf.tensor2d([symptomTensor]);

      var testPrediction = predictionModel.predict(input);
      // console.log("predicted result:");
      // testPrediction.print();
      diseaseClass = testPrediction.argMax(-1).dataSync()[0];
      // console.log(diseaseClass);
      var diseaseName = decodeDisease(diseaseClass);
      if (diseaseName[0] !== null) {
        console.log(diseaseName[0]);
        diseaseCallBack(diseaseName[0], res);
      } else {
        res.status(404).send("disease prediction error");
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(err);
    });
};
const diseaseCallBack = async (diseaseName, res) => {
  const diseaseModel = await db.Disease.findOne({
    where: { diseaseName: diseaseName },
    include: [{ model: db.Symptom, as: "symptom" }],
  });
  res
    .status(200)
    .send({ predictedDisease: diseaseName, diseaseDetail: diseaseModel });
};

module.exports = diseasePredictionController;
