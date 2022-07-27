const sumAll = function(num1, num2) {
    sum = 0;
    let numStart = 0;
    let numEnd = 0;

    if( num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2))
    {
        return 'ERROR';
    } else if ( num1 > num2) {
        numStart = num2;
        numEnd = num1;
    } else {
        numStart = num1;
        numEnd = num2;
    }

    for( let i = numStart; i <= numEnd; i++)
    {
        sum += i;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
