const dfd = require("danfojs-node");

const diseaseData = require("../common/disease_data");

const encodeDisease = () => {
  const sortedDisease = diseaseData.sort();
  let series = new dfd.Series(sortedDisease);
  let encode = new dfd.LabelEncoder();
  encode.fit(series);
  const encodedDisease = encode.transform(series.values);
  console.log(encodedDisease);
  return encode;
};
const decodeDisease = (diseaseClass) => {
  const encoder = encodeDisease();
  const diseaseName = encoder.inverseTransform([diseaseClass]);
  return diseaseName;
};

module.exports = decodeDisease;
