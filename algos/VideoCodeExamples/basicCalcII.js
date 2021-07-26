let calculate = function (s) {
    let leftNum;
    let rightNum;
    let sign;

    s = s.replace(/\s/g, '')
    console.log(s, "sans whitespace")

    let multDivPairs = /(\d+)(\/|\*)(\d+)/;
    let multiplyOrDivide = s.match(multDivPairs)

    while (multiplyOrDivide) {
        console.log(multiplyOrDivide, "math to-do, tada")
        let operated;

        sign = multiplyOrDivide[2]
        leftNum = multiplyOrDivide[1]
        rightNum = multiplyOrDivide[3]
        if (sign === '*') {
            operated = leftNum * rightNum
        } else {
            operated = Math.trunc(leftNum / rightNum)
        }
        // console.log(operated)
        s = s.replace(multiplyOrDivide[0], operated)
        multiplyOrDivide.lastIndex = 0;
        multiplyOrDivide = s.match(multDivPairs)
        console.log(s)
    }

    let numsArray = s.match(/\d+/g)
    let operatorsArray = s.match(/[\-|\+]/g)
    console.log(numsArray,operatorsArray)
    let total = parseInt(numsArray[0])
    if (!operatorsArray) return total

    operatorsArray.forEach((operator, i) => {
        rightNum = parseInt(numsArray[i+1])
        if (operator === '+') {
            total += rightNum
        } else {
            total -= rightNum
        }
    })
    return total
}

console.log(calculate("3+2*2*2"))