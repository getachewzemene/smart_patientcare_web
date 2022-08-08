// const tf = require("@tensorflow/tfjs");
const tf = require("@tensorflow/tfjs-node");
const decodeDisease = require("../utils/disease_encoder_decoder");
const convertedSymptomArray = require("../utils/symptom_converter");
const diseasePredictionController = async (req, res) => {
  const symptoms = req.query.symptoms;
  console.log(symptoms);
  const symptomTensor = convertedSymptomArray(symptoms);
  const model = tf
    .loadLayersModel("file://./node_tfmodel/model.json")
    .then((predictionModel) => {
      console.log("tf model loaded");
      const input = tf.tensor2d([symptomTensor]);

      var testPrediction = predictionModel.predict(input);
      console.log("predicted result:");
      testPrediction.print();
      diseaseClass = testPrediction.argMax(-1).dataSync()[0];
      console.log(diseaseClass);
      var diseaseName = decodeDisease(diseaseClass);
      console.log(diseaseName[0]);
      res.status(200).send(diseaseName[0]);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = diseasePredictionController;
