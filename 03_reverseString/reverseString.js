const reverseString = function(str) {
  let strReversed = '';
  let strL = str.length;

  let i = 0;

  while (i < strL) {
    strReversed += str.at(-1);
    str = str.slice(0, -1);

    i++;
  }

  return strReversed;
};

// Do not edit below this line`
module.exports = reverseString;