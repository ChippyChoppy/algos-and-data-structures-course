// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

//Time: O(N)
//Sample input:
/*
console.log(sameFrequency(182,281)) // true
console.log(sameFrequency(34, 14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22, 222)) // false
*/

function sameFrequency(num1, num2) {
    // turn nums into strings so we can loop over them.
    let str1 = num1.toString()
    let str2 = num2.toString()

    // if lengths are different it's automatically false, done!
    if (str1.length !== str2.length) return false;

    // initialize our counter
    let counter = {}

    // loop over str1
    for (let i = 0; i < str1.length; i++) {
        if (counter[str1[i]]) {
            counter[str1[i]]++               
        } else {
            counter[str1[i]] = 1
            console.log(counter)
        }
    }
    // loop over str2
    for (let i = 0; i < str2.length; i++ ) {
        if (counter[str2[i]]) {
            counter[str2[i]]--
            console.log(counter)

        } else {
            return false
        }           
        // console.log(counter)

    }
    return true
}

// console.log(sameFrequency(182,281)) // true
// console.log(sameFrequency(34, 14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
// console.log(sameFrequency(22, 222)) // false


/*
1 != 2
1 != 8
1 === 1
8 != 2
8 === 8
2 === 2

true
*/

/*
3 !== 1
3 !== 4

false
*/