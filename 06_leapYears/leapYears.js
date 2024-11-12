const leapYears = function(year) {

  // Leap years can be determined as years which are evenly divisible by four — except for century years. Century years can be leap years, but only if they are evenly divisible by four-hundred. 

  if (!(year % 100 === 0) && year % 4 === 0) { 
    return true;

  } else if (year % 100 === 0 && year % 400 === 0) { 
    return true;

  } else {
    return false;
  }

};

// Do not edit below this line
module.exports = leapYears;
