const repeatString = function(str, num) {
  let outputString = str;

  if (num === 0) {
    outputString = '';
    return outputString;

  } else if (num < 0) {
    outputString = 'ERROR';
    return outputString;

  } else {
    for (let i = 1; i < num; i++) {
      outputString += str;
    }
  }
  return outputString;
};
  
// Do not edit below this line
module.exports = repeatString;
