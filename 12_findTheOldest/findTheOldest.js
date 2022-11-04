const findTheOldest = function(people) {
    var oldestAge = 0;
    var oldestPerson;
    const date = new Date();
    for (person of people){
        if (!("yearOfDeath" in person)){
            person.yearOfDeath = date.getFullYear();
        }
        let age = person.yearOfDeath - person.yearOfBirth;
        if (age>oldestAge){
            oldestPerson = person;
            oldestAge = age;
        }
    }
    return oldestPerson
};

// Do not edit below this line
module.exports = findTheOldest;
