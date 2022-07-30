const token = require("../middleware/auth");
const db = require("../models");
const bcrypt = require("bcryptjs");
const doctorLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const doctor = await db.User.findOne({
      where: { email: email },
    });
    // console.log(doctor.id);
    // console.log(doctor.email);
    // console.log(doctor.role);

    if (!doctor) {
      res.status(404).send("user not found");
    }
    const accessToken = token.createToken(doctor.id, doctor.email);
    const isPasswordCorrect = bcrypt.compareSync(password, doctor.password);
    !isPasswordCorrect
      ? res.status(403).send("incorrect password try again!")
      : res.status(200).send({
          id: doctor.id,
          email: doctor.email,
          role: doctor.role,
          accessToken: accessToken,
        });
  } catch (error) {
    res.status(400).send(JSON.stringify(error));
  }
};

module.exports = doctorLogin;
