const palindromes = function (string) {
  string = string.toLowerCase().replace(/\s/g, '');

  let onlyAlphaNumeric = string.split('').filter((character) => character.match(/^[a-z0-9]+$/g));

  string = onlyAlphaNumeric.join('');

  let stringReversed = onlyAlphaNumeric.reverse().join('');

  if (string === stringReversed) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
