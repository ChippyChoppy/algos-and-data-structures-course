// given a string s containing just the characters (){}[] determind if the input string is valid

// and input string is valid if
/**
 * open brackets must be closed by the same type of brackets
 * open brackets must be closed in the correct order
 */

function validString(input) {
    let isItPaired = [];
    let validPairs = {
        '(': ')',
        '{': '}',
        '[': ']'
    }

    for (let i = 0; i < input.length; i++) {
        if (input[i] === '(' || input[i] === '[' || input[i] === '{') {
            isItPaired.push(input[i]);
            console.log("paired", isItPaired)
        }
        else {
            let recentOpen = isItPaired.pop();
            console.log("popped", recentOpen)
            if (input[i] !== validPairs[recentOpen]) {
                return false
            }
        }

    }
    if (isItPaired.length !== 0) {
        return false
    }
    else return true;
}

console.log(validString("([])[]{}"))

/**
 * paired = ['(']
 *
 */