var calculate = function(s) {
    let leftNum;
    let rightNum;
    let sign;
    
    s = s.replace(/\s/g, '')
    console.log(s)

    let multDivPairs = /(\d+)(\/|\*)(\d+)/;
    let multiplyOrDivide = s.match(multDivPairs)

    console.log(multiplyOrDivide)

    while(multiplyOrDivide) {
        let operated;
        sign = multiplyOrDivide[2]
        leftNum = parseInt(multiplyOrDivide[1])
        rightNum = parseInt(multiplyOrDivide[3])
        if (sign === '*') {
            operated = leftNum * rightNum
        } else {
            operated = Math.trunc(leftNum / rightNum)
        }
        s = s.replace(multiplyOrDivide[0], operated)
        multiplyOrDivide.lastIndex = 0
        multiplyOrDivide = s.match(multDivPairs)
        console.log(s)
    }
    
    let numsArray = s.match(/\d+/g)
    let operatorArray = s.match(/[\-|\+]/g)
    console.log(numsArray,operatorArray)
    let total = parseInt(numsArray[0])
    console.log("total", total)
    if (!operatorArray) return total;

    for(let i = 0; i < operatorArray.length; i++) {
        rightNum = parseInt(numsArray[i+1])
        if(operatorArray[i] === '+') {
            total += rightNum
        } else {
            total -= rightNum
        }
    }
    // operatorArray.forEach((operator, i) => {
    //     leftNum = parseInt(numsArray[i+1])
    //     if (operator === '+') {
    //         total += leftNum
    //     } else {
    //         total -= leftNum
    //     }
    // })
    console.log(total)
};

calculate("3+6/2*8+7-3*9")