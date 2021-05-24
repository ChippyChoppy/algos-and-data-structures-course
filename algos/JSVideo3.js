const power = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
}

console.log(power(5, 3))

const power2 = function(base, exponent) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base
    }
    return result
}

console.log(power2(5, 3))