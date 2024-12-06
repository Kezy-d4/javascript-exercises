const findTheOldest = function(people) {
  const currentYear = new Date().getFullYear();

  function getAge(obj) {
    if (!obj.yearOfDeath) {
      return currentYear - obj.yearOfBirth;
    } else {
      return obj.yearOfDeath - obj.yearOfBirth;
    }
  }

  let ages = people.map((person) => getAge(person));

  let oldest = Math.max(...ages);

  return people.find((person) => getAge(person) === oldest);
};

// Do not edit below this line
module.exports = findTheOldest;
