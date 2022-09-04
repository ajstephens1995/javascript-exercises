const sumAll = function(intOne, intTwo) {
    sum = 0;
    if (typeof intOne !== "number"|| typeof intTwo !== "number") {
        return "ERROR"
    }
    if (intOne < 0 || intTwo < 0) {
        return "ERROR"
    }
    if (intOne < intTwo) {
        for (i = intOne; i <= intTwo; i++) {
            sum += i;
        }
        return sum;
    }
    if (intTwo < intOne) {
        for (i = intTwo; i <= intOne; i++) {
            sum += i;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
