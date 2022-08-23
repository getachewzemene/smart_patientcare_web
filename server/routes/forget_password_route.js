const express = require("express");
const router = express.Router();
const db = require("../models");
const nodemailer = require("nodemailer");
const bcrypt = require("bcryptjs");
router.post("/forget-password", async (req, res) => {
  const { email } = req.body;
  console.log(email);
  try {
    const user = await db.User.findOne({
      where: { email: email },
    });
    console.log(user);
    if (!user) {
      res.status(404).send("user not found");
    } else {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "192.168.0.7",
        name: "Techno",
        port: 465,
        secure: true,
        auth: {
          user: "getchze1221@gmail.com",
          pass: "hqcatkmjbmcwpcdk",
        },
      });

      var mailOptions = {
        from: "getchze1221@gmail.com",
        to: "www.getch2017@gmail.com",
        subject:
          "email from SMPCAS Admin password reset granted enter your id and new password",
        text: "Confirmation Code:" + user.id,
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
          res.send(error);
        } else {
          console.log("Email sent: " + info.response);
          res.status(200).send("success");
        }
      });
    }
  } catch (error) {
    res.status(400).send(JSON.stringify(error));
  }
});

module.exports = router;
