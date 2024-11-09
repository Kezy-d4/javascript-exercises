const repeatString = function(str, num) {
  let outputString = str;

  for (let i = 1; i < num; i++) {
    outputString += str;
  }

  return outputString
};


// Do not edit below this line
module.exports = repeatString;
