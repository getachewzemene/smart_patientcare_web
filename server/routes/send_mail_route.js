const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/send-mail", (req, res) => {
  const { email, channelID } = req.body;
  console.log(req.body);
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "localhost",
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
    subject: "This is your channel id copy and join the meeting",
    text: channelID,
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
  //   res.end();
});

module.exports = router;
