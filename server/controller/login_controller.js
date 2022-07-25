const token = require("../middleware/auth");
const login = (req, res) => {
  const { email, password } = req.body;
  id = 1;
  const accessToken = token.createToken(id, email);

  console.log(accessToken);
  res.status(200).send({
    id: id,
    email: email,
    accessToken: accessToken,
  });
};

module.exports = login;
