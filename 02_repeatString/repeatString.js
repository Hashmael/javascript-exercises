const repeatString = function(stringToRepeat, timesRepeated) {
    if (timesRepeated < 0) {
        return "ERROR";
    }
    return stringToRepeat.repeat(timesRepeated);
};

// Do not edit below this line
module.exports = repeatString;
