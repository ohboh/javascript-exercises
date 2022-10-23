const removeFromArray = function(array, ...elementsToRemove) {
    let trashArray = [];
    for (let element of elementsToRemove){
        trashArray.push(element);
    }
    newArray = array.filter(function(remainingElements){
        return !trashArray.includes(remainingElements);
    });
    
    return newArray;
}

// Do not edit below this line
module.exports = removeFromArray;
