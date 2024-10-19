const findTheOldest = function (people) {
  people.map((item) => {
    if (!item.yearOfDeath) {
      item.yearOfDeath = 2024;
    }
    return {
      name: item.name,
      yearOfBirth: item.yearOfBirth,
      yearOfDeath: item.yearOfDeath,
    };
  });
  return people
    .map((item) => ({
      year: item.yearOfDeath - item.yearOfBirth,
      name: item.name,
    }))
    .sort((a, b) => b.year - a.year)[0];
};

// Do not edit below this line
module.exports = findTheOldest;
