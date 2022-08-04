const palindromes = function (str) {
    let strArray = Array.from(str.toUpperCase().split(''));
    let filtered = strArray.filter( char => char.toUpperCase() != char.toLowerCase() );

    return filtered.every((char, index) => {
        if(index < Math.floor(filtered.length / 2 )) {
            return char == filtered[filtered.length - 1 - index];
        } else {
            return true;
        }
    })
}

// Do not edit below this line
module.exports = palindromes;
