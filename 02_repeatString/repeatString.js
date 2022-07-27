const repeatString = function( str, repeats) {
    if(repeats < 0) {
        return 'ERROR'
    } else {
        return str.repeat(repeats);
    }
};

// Do not edit below this line
module.exports = repeatString;
