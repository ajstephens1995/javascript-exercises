const removeFromArray = function() {
    newArray = arguments[0]
    for (i = 0; i < arguments[0].length; i++) {
        for (ii = 1; ii < arguments.length; ii++) {
           if (newArray[i] === arguments[ii]) {
            newArray.splice(i, 1);
            i--
           }
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
