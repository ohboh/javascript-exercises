const palindromes = function (string) {
    string = string.replace(/\W/g, "");
    string = string.replace(" ", "");
    string = string.toLowerCase();
    let reversedString = "";
    for (let i = string.length - 1; i>=0; i--){
        reversedString += string[i];
    }
    
    return string == reversedString;

};

// Do not edit below this line
module.exports = palindromes;
