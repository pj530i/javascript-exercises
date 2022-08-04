const fibonacci = function(num) {
    const converted = parseInt(num);
    if(!converted || converted < 1) {
        return 'OOPS';
    }

    let fib = 0;
    let last1 = 0;
    let last2 = 1;
    let pos = 0;
    
    do {
        fib = last1 + last2;
        last1 = last2;
        last2 = fib;

    } while( ++pos < converted - 1)

    return fib;
};

// Do not edit below this line
module.exports = fibonacci;
