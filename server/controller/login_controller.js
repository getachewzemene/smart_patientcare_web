const token = require("../middleware/auth");
const doctorLogin = (req, res) => {
  const { email, password } = req.body;
  id = 1;
  const accessToken = token.createToken(id, email);

  console.log(accessToken);
  res.status(200).send({
    id: id,
    email: email,
    role: "doctor",
    accessToken: accessToken,
  });
};

module.exports = doctorLogin;
