const reverseString = function(stringToReverse) {
    let stringContainer = stringToReverse.split("");
    let reversedString = "";
    reversedString = (stringContainer.reverse()).join("");
    return reversedString
};

// Do not edit below this line
module.exports = reverseString;
