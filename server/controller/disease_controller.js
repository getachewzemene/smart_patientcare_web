const db = require("../models");
const getAllDisease = async (req, res) => {
  try {
    const diseaseArray = await db.Disease.findAll({
      include: { model: db.Symptom, as: "symptom" },
    });
    if (!diseaseArray) {
      res.status(404).send("disease data not found");
    }
    res.status(200).send(diseaseArray);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};
const getDiseaseByName = async (req, res) => {
  let diseaseName = req.query;
  try {
    const disease = await db.Disease.findeOne({
      where: { diseaseName: diseaseName },
      include: { model: db.Symptom, as: "symptom" },
    });
    res.status(200).send({
      message: "Disease Information",
      data: disease,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};
module.exports = { getAllDisease, getDiseaseByName };
