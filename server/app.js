require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const http = require("http");
const app = express();
const port = process.env.PORT || 4000;
const server = http.createServer(app);
const initDB = require("./models/index");
const allRouts = require("./routes/all_routes");
app.use([bodyParser.json(), bodyParser.urlencoded({ extended: true }), cors()]);
//routes
allRouts(app);
if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));
  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}
server.listen(port, () => {
  initDB.sequelize
    .authenticate()
    .then(() => {
      console.log("database connected");
    })
    .catch((err) => {
      console.error("Unable to connect to the database:", err);
    });

  // initDB.sequelize.sync();
  console.log(`Server running on port ${port}`);
});
