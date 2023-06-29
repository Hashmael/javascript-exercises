const sumAll = function(start, stop) {
    if (start < 0 || stop < 0 || typeof start != "number" || typeof stop != "number") { return "ERROR"; };
    if (start > stop) {
        var startPlaceholder = start;
        start = stop;
        stop = startPlaceholder;
    };
    var sum = 0;
    for (var increment = start; increment <= stop; increment++) {
        sum += increment;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
