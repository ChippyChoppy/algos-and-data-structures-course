/**
 * 227. Basic Calculator II
 * 
 * Given a string, 's' which represents an expression, evaluate this expression and return its value.
 * 
 * The integer division should truncate toward zero.
 * 
 * Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().
 * 
 * Example 1:
 * Input: s = "3+2*2"
 * Output: 7
 * 
 * Example 2: 
 * Input: s = " 3/2 "
 * Output: 1
 * 
 * Example 3: 
 * Input s = " 3+5 / 2 "
 * Output: 5
 */

let calculate = function (s) {
    let leftNum;
    let rightNum;
    let sign;

    s = s.replace(/\s/g, '')
    console.log(s, "sans whitespace")

    let multDivPairs = /(\d+)(\/|\*)(\d+)/;
    let multiplyOrDivide = s.match(multDivPairs)

    while (multiplyOrDivide) {
        console.log(multiplyOrDivide, "all the pairs to math first")

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
        console.log(s, "after math")
        multiplyOrDivide.lastIndex = 0
        multiplyOrDivide = s.match(multDivPairs)
    }

    let numsArray = s.match(/\d+/g)
    let operatorArray = s.match(/[\-|\+]/g)
    console.log(numsArray, operatorArray)
    let total = parseInt(numsArray[0])
    console.log("total", total)
    if (!operatorArray) return total;

    operatorArray.forEach((operator, i) => {
        rightNum = parseInt(numsArray[i + 1])
        if (operator === '+') {
            total += rightNum
        } else {
            total -= rightNum
        }
    })
    return total
}

console.log(calculate("3+2*2/5+7*8*9"))