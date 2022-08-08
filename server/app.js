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
// const socketRoute = require("./routes/socket_route");
const adminRoute = require("./routes/admin_route");
const loginRoute = require("./routes/login_route");
const doctorRoute = require("./routes/doctor_route");
const predictDiseaseRoute = require("./routes/predict_disease_route");
// const meetingRoute = require("./routes/meeting_route");
// const initMeetingServer = require("./meeting_server");
// async function readCSV() {
//   let csvDataset = tf.data.csv("file://./public/assets/dataset.csv", {});
//   console.log((await csvDataset.columnNames()).length);
//   // const a = tf.data.array(csvDataset);
//   // a.forEachAsync((e) => console.log(e));
//   const flattenedDataset = csvDataset
//     .map(({ xs, ys }) => {
//       // Convert xs(features) and ys(labels) from object form (keyed by
//       // column name) to array form.
//       console.log(Object.values(xs));
//       console.log(Object.values(ys));
//       return { xs: Object.values(xs), ys: Object.values(ys) };
//     })
//     .batch(10);
// }

// readCSV();
// console.log(numOfLables);
// df = dfd
//   .readCSV("./public/assets/dataset.csv", {
//     header: true,
//   }) //assumes file is in CWD
//   .then((df) => {
//     df = df.fillNa(0);
//     // df.count({ axise: 1 }).print();
//     // df["Disease"].unique().print();
//     let data = df.drop({ columns: "Disease" });
//     let lables = df["Disease"];
//     // console.log(data);
//     console.log(lables);

//     // df.head(50).print();
//     // let prcount = df["prognosis"].values;
//     // let sf = new dfd.Series(prcount);
//     // sf.tensor.print();
//     // console.log(sf.tensor);
//     //check the is the data in each sample is balanced or not
//     // console.log(sf.valueCounts());
//     // let diseaseCount = sf.valueCounts();
//     // console.log(diseaseCount.index);
//     // console.log(diseaseCount.values);
//     // plot({
//     //   x: diseaseCount.index,
//     //   y: diseaseCount.values,
//     //   xLabel: "Disease",
//     //   yLabel: "Counts",
//     //   title: "Disease Count",
//     //   name: "diseas_plot",
//     // });
//     // console.log(df.iloc({ rows: ["1:2"], columns: ["41:42"] }));
//     // df["prognosis"].print();
//     // let encode = new dfd.LabelEncoder();
// encode.fit(df["prognosis"]);
// df["prognosis"] = encode.fitTransform(df["prognosis"].values);
//     // df["prognosis"].print();
//     // let features = df.drop({ columns: ["prognosis"] });
//     // let lables = df["prognosis"];
//     // console.log(features);
//     // console.log(lables.values);
//     // let featurTensor = features.tensor;
//     // let labelTensor = lables.tensor;
//     // const options = {
//     //   seed: 3,
//     //   maxFeatures: 0.8,
//     //   replacement: true,
//     //   nEstimators: 25,
//     // };
//     // let trainingSet = featurTensor.arraySync();
//     // let predictionSet = labelTensor.arraySync();
//     // console.log(trainingSet);
//     // console.log(predictionSet);
//     // const classifier = new RandomForestClassifier(options);
//     // classifier.train(trainingSet, predictionSet);
//     // const result = classifier.predict(trainingSet);
//     // const oobResult = classifier.predictOOB();
//     // const confusionMatrix = classifier.getConfusionMatrix();
//     // console.log(result);
//     // console.log(oobResult);
//     // console.log(confusionMatrix);
//     // featurTensor.print();
//     // labelTensor.print();
//     // console.log(featurTensor);
//     // console.log(labelTensor);
//     // console.log(labelTensor.arraySync());
//     // // console.log(
//     //   dfd.toJSON(df, {
//     //     format: "column",
//     //   })
//     // );
//     //training
//     // const diseaseModel = tf.sequential();

//     // // Two fully connected layers with dropout between each:
//     // diseaseModel.add(
//     //   tf.layers.dense({ units: 300, activation: "relu", inputShape: [131] })
//     // );
//     // diseaseModel.add(tf.layers.dropout({ rate: 0.01 }));
//     // diseaseModel.add(tf.layers.dense({ units: 400, activation: "relu" }));
//     // diseaseModel.add(tf.layers.dropout({ rate: 0.01 }));
//     // diseaseModel.add(tf.layers.dense({ units: 400, activation: "relu" }));
//     // diseaseModel.add(tf.layers.dropout({ rate: 0.01 }));
//     // diseaseModel.add(tf.layers.dense({ units: 42, activation: "softmax" }));

//     // diseaseModel.compile({
//     //   optimizer: tf.train.adam(0.01),
//     //   loss: "sparseCategoricalCrossentropy",
//     //   metrics: ["accuracy"],
//     // });
//     // console.log(diseaseModel.summary());
//     // diseaseModel.save()
//   })
//   .catch((err) => {
//     console.log(err);
//   });

app.use([
  bodyParser.json(),
  bodyParser.urlencoded({ extended: true }),
  cors(),
  // meetingRoute,
  // socketRoute,
]);
app.use("/images", express.static("./images"));
app.use("/admin", adminRoute);
app.use("/doctor", doctorRoute);
app.use(loginRoute);
app.use(predictDiseaseRoute);
// initMeetingServer(server);
// const io = require("socket.io")(server, {
//   cors: {
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST"],
//     allowedHeaders: ["my-header"],
//     credentials: true,
//   },
// });
// const socketManager = require("./socket_manager/socket_manager");
// io.on("connection", socketManager);
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
