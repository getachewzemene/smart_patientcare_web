const symptomData = require("../common/symptom_data");
const convertedSymptomArray = (symptoms) => {
  var numArray = [];
  for (var i = 0; i < symptomData.length; i++) {
    if (symptoms.indexOf(symptomData[i]) != -1) {
      numArray.push(1);
    } else {
      numArray.push(0);
    }
  }
  console.log(numArray);
  return numArray;
};

module.exports = convertedSymptomArray;
