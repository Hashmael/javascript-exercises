const removeFromArray = function(unfilteredArray, ...elementsToFilter) {
    return unfilteredArray.filter(
        function (element) {
            for (const elementToFilter of elementsToFilter){
                if (element === elementToFilter) { return false; };
            }
            return true;
        }
    );
};

// Do not edit below this line
module.exports = removeFromArray;
