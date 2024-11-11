const sumAll = function(num1, num2) { 

  let greaterNumber;
  let lesserNumber;

  function compareNumbers() {
    if (num1 > num2) {
      greaterNumber = num1;
      lesserNumber = num2;
    } else {
      greaterNumber = num2;
      lesserNumber = num1;
    }
  }

  compareNumbers();

  let finalSum = 0;
  let i = lesserNumber;

  while (i <= greaterNumber) {
    finalSum += i;

    i++;
  }
  return finalSum;
};

// Do not edit below this line
module.exports = sumAll;

/*
PLANNING...

THE TASK:
Given two positive integer arguments, return the sum of each integer between them (inclusively). E.g. sumAll(1, 4) should return the sum of 1 + 2 + 3 + 4 which is 10. 

THE PROCESS:









*/
