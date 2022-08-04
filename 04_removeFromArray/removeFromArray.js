
function contains(toRemove, element) {
    return !toRemove.includes(element);
}

const removeFromArray = function(srcArray, ...toRemove) {
    // bind passes "this" to contains function as well as toRemove arg. filter calls "contains" and adds element
    // as an arg for testing
    return srcArray.filter(contains.bind(this, toRemove));
};

// Do not edit below this line
module.exports = removeFromArray;
