const db = require("../models");
const getAllDisease = async (req, res) => {
  try {
    const disease = await db.Disease.findAll({
      include: { model: db.Symptom, as: "symptom" },
    });
    res.status(200).send({
      message: "All Disase Information",
      data: disease,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};
module.exports = { getAllDisease };
