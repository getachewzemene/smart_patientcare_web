const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/forget-password", (req, res) => {
  const { email } = req.body;
  console.log(email);
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "192.168.137.219",
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
    to: email,
    subject: "email from SMPCAS Admin",
    text: "Hello great people this email is from admin Getch",
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
});

module.exports = router;
