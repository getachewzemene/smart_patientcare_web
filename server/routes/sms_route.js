const accountSid = process.env.TWILIO_ACCOUNT_SSD; // Your Account SID from www.twilio.com/console
const authToken = process.env.TWILIO_AUTH_TOKEN; // Your Auth Token from www.twilio.com/console
const express = require("express");
const router = express.Router();
const twilio = require("twilio");

router.post("/send-sms", (req, res) => {
  const { message, to } = req.body;
  const client = new twilio(accountSid, authToken);
  client.messages
    .create({
      body: message,
      to: to, // Text this number
      from: "+12517664945", // From a valid Twilio number
    })
    .then((message) => {
      console.log(message.sid);
      res.end();
    });
});

module.exports = router;
