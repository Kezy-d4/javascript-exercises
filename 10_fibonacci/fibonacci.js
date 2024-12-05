const fibonacci = function(index) {
  // 1, 1, 2, 3, 5, 8,
  let sequence = [0, 1, 1,];

  if (index < 0) {
    return 'OOPS';
  }

  if (index >= 0 && index <= 2) {
    return sequence[index];
  }

  let lastIndex;
  let secondToLastIndex;
  let nextNum;

  while (true) {
    lastIndex = sequence.length - 1;
    secondToLastIndex = sequence.length - 2;

    nextNum = sequence[lastIndex] + sequence[secondToLastIndex];

    sequence.push(nextNum);

    if (sequence[index]) {
      return sequence[index];
    }
  }
};

// Do not edit below this line
module.exports = fibonacci;