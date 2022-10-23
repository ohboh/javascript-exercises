const repeatString = function(stringToRepeat, timesToRepeat) {
    var returnString = "";

    while (timesToRepeat!=0){
        if (timesToRepeat > 0){
            returnString += stringToRepeat;
            timesToRepeat--;
        }
        else{
            returnString = "ERROR";
        }
    }
    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
