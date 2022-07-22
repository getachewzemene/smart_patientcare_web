require("dotenv").config();
const express = require("express");
const dfd = require("danfojs-node");
const bodyParser = require("body-parser");
// const { RandomForestClassifier } = require("ml-random-forest");
const cors = require("cors");
const http = require("http");
// const tf = require("@tensorflow/tfjs");
const plot = require("node-remote-plot");
var nj = require("numjs");
const tf = require("@tensorflow/tfjs-node");
var nj = require("numjs");
const app = express();
const port = process.env.PORT || 4000;
const server = http.createServer(app);
const initDB = require("./models/index");
// const socketRoute = require("./routes/socket_route");
const adminRoute = require("./routes/admin_route");
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
// var disease = [
//   "Fungal infection",
//   "Allergy",
//   "GERD",
//   "Chronic cholestasis",
//   "Drug Reaction",
//   "Peptic ulcer diseae",
//   "AIDS",
//   "Diabetes ",
//   "Gastroenteritis",
//   "Bronchial Asthma",
//   "Hypertension ",
//   "Migraine",
//   "Cervical spondylosis",
//   "Paralysis (brain hemorrhage)",
//   "Jaundice",
//   "Malaria",
//   "Chicken pox",
//   "Dengue",
//   "Typhoid",
//   "hepatitis A",
//   "Hepatitis B",
//   "Hepatitis C",
//   "Hepatitis D",
//   "Hepatitis E",
//   "Alcoholic hepatitis",
//   "Tuberculosis",
//   "Common Cold",
//   "Pneumonia",
//   "Dimorphic hemmorhoids(piles)",
//   "Heart attack",
//   "Varicose veins",
//   "Hypothyroidism",
//   "Hyperthyroidism",
//   "Hypoglycemia",
//   "Osteoarthristis",
//   "Arthritis",
//   "(vertigo) Paroymsal  Positional Vertigo",
//   "Acne",
//   "Urinary tract infection",
//   "Psoriasis",
//   "Impetigo",
// ];
// let series = new dfd.Series(disease);
// let encode = new dfd.LabelEncoder();
// encode.fit(series);

// encodedDisease = encode.transform(series.values);
// // console.log(encodedDisease);
// const model = tf
//   .loadLayersModel("file://./node_tfmodel/model.json")
//   .then((predictionModel) => {
//     console.log("tf model loaded");
//     const input = tf.tensor2d([
//       [
//         1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//         0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//         0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//         0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//         0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//         0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//       ],
//     ]);

//     var testPrediction = predictionModel.predict(input);
//     console.log("predicted result:");
//     testPrediction.print();
//     diseaseClass = testPrediction.argMax(-1).dataSync()[0];
//     console.log(diseaseClass);

//     console.log(encode.inverseTransform([diseaseClass]));
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
app.use("/admin", adminRoute);
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
  console.log(`Server running on port ${port}`);
});
