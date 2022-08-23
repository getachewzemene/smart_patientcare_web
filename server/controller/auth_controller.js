const token = require("../middleware/auth");
const db = require("../models");
const bcrypt = require("bcryptjs");
const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await db.User.findOne({
      where: { email: email },
    });
    // console.log(doctor.id);
    // console.log(doctor.email);
    // console.log(doctor.role);

    if (!user) {
      res.status(404).send("user not found");
    } else {
      const accessToken = token.createToken(user.id, user.email);
      const isPasswordCorrect = bcrypt.compareSync(password, user.password);
      !isPasswordCorrect
        ? res.status(403).send("incorrect password try again!")
        : res.status(200).send({
            id: user.id,
            email: user.email,
            role: user.role,
            accessToken: accessToken,
          });
    }
  } catch (error) {
    res.status(400).send(JSON.stringify(error));
  }
};
const userRegister = async (req, res) => {
  // console.log(req.body);
  const {
    id,
    firstName,
    lastName,
    email,
    password,
    phone,
    gender,
    DOB,
    address,
    weight,
    bloodGroup,
  } = req.body;
  const hashPassword = bcrypt.hashSync(password, 10);

  try {
    const isUser = await db.User.findOne({
      where: { email: email },
    });
    if (!isUser) {
      const userModel = await db.User.create(
        {
          id: id,
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: hashPassword,
          phone: phone,
          gender: gender,
          DOB: DOB,
          address: address,
          userPatient: {
            id: id,
            weight: weight,
            bloodGroup: bloodGroup,
          },
        },
        {
          include: [{ model: db.Patient, as: "userPatient" }],
        }
      );
      res.status(200).send({
        message: "user data added Success",
        data: userModel,
      });
    } else {
      res.status(409).send("user data  already found");
    }
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};
const changePassword = async (req, res) => {
  const { oldPassword, newPassword, id } = req.body;
  // console.log(id);
  try {
    const user = await db.User.findOne({
      where: { id: id },
    });

    if (!user) {
      res.status(404).send("user not found");
    } else {
      // console.log(user);
      const isPasswordCorrect = bcrypt.compareSync(oldPassword, user.password);
      if (!isPasswordCorrect) {
        res.status(403).send("incorrect password try again!");
      } else {
        const hashPassword = bcrypt.hashSync(newPassword, 10);
        const updatePassword = await db.User.update(
          {
            password: hashPassword,
          },
          { where: { id: id } }
        );

        if (!updatePassword) {
          res.status(400).send("failed to update password try again!");
        } else {
          // console.log(updatePassword);
          res.status(200).send("password updated success");
        }
      }
    }
  } catch (error) {
    // console.log(error);
    res.status(400).send("errror occured while changing password");
  }
};
const updatePassword = async (req, res) => {
  const { newPassword, id } = req.body;
  console.log(req.body);
  try {
    const user = await db.User.findOne({
      where: { id: id },
    });

    if (!user) {
      res.status(404).send("user not found");
    } else {
      const hashPassword = bcrypt.hashSync(newPassword, 10);
      const updatePassword = await db.User.update(
        {
          password: hashPassword,
        },
        { where: { id: id } }
      );

      if (!updatePassword) {
        res.status(400).send("failed to update password try again!");
      } else {
        // console.log(updatePassword);
        res.status(200).send("password updated success");
      }
    }
  } catch (error) {
    // console.log(error);
    res.status(400).send("errror occured while changing password");
  }
};
module.exports = { userLogin, userRegister, changePassword, updatePassword };
