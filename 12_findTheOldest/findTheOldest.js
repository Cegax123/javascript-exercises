const findTheOldest = function(people) {
  let currentYear = new Date().getFullYear();

  const getAge = function(person) {
    return (person.yearOfDeath == undefined ? currentYear : person.yearOfDeath) - person.yearOfBirth;
  };

  let oldestPerson = people.reduce(function(prev, curr) {
    return getAge(prev) > getAge(curr) ? prev : curr;
  });

  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
