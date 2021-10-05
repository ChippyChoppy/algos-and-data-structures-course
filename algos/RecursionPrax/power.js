/* Write a function called power which accepts a base and an exponent. The funtion should return the power of the base to the exponent. This function should mimic the functionality of Math.pow() - do not worry about negative bases and exponents
*/

function power(base, exp) {
    if (exp === 0) return 1;
    let i = 1
    console.log(base, "*", power(base,exp-1), "=", base * power(base,exp-1) )
    return base * power(base, exp-1);
}

console.log(power(2, 8))

/*
2 * [2^7]
    
*/