const repeatString = function(string, num) {
    let outputString = "";
    let i = 0
    
    if (num < 0) {
        return "ERROR";
    }
    while (i < num) {
        outputString += string;
        i++
    }
    return outputString;
};

// Do not edit below this line
module.exports = repeatString;
