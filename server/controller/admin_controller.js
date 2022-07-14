const db = require("../models");
createAdmin = async (req, res) => {
  const { firstName, lastName, email, password, phone } = req.body;

  try {
    const createdModel = await db.Admin.create({
      id: 1,
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      phone: phone,
    });
    res
      .status(200)
      .send({ message: "admin data added syscess", data: createdModel });
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};
module.exports = { createAdmin };
