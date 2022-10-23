const sumAll = function(n1, n2) {

    if (Number.isInteger(n1) && Number.isInteger(n2) && n1>=0 && n2>=0)
    {

        if (n1 > n2){
            var finalSum = 0;
            while (!n1 < n2){
                finalSum += n1;
                n1--;
            }
        }
        else if (n1 < n2){
            var finalSum = 0;
            while (!n1 < n2){
                finalSum += n2;
                n2--;
            }
        }
        return finalSum;
    }
    else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
