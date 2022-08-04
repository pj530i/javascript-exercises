const getCurrentAge = function(person) {
    // If still alive use current year to determine ago.  If birth year isn't defined it's prolly the default empty object
    const lastYear = ('yearOfDeath' in person) ? person['yearOfDeath'] : (new Date()).getFullYear();
    const birthYear = ('yearOfBirth' in person) ? person['yearOfBirth'] : (new Date()).getFullYear();
    return lastYear - birthYear;
}

const findTheOldest = function(people) {
    return people.reduce( 
        (oldest, person) => getCurrentAge(person) > getCurrentAge(oldest) ? person : oldest, {} );
};

// Do not edit below this line
module.exports = findTheOldest;
