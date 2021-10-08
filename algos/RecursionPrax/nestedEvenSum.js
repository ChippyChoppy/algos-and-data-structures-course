/**
 * Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.
 */

function nestedEvenSum(obj, evenSum = 0) {
    for (let key in obj) {
        console.log(typeof obj[key] === 'number')
        if (typeof obj[key] === 'object') {
            console.log("this is an object, do I recurse here?")
            evenSum += nestedEvenSum(obj[key])
        } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
            console.log("this is a number", obj[key] % 2 === 0)
            evenSum += obj[key]
        }
    }
    return evenSum
}
// for of loop to go through object ?
// obj[key] will either be another 'object, OR it will be a number
// if it's an object we want to go deeper --> recursion call?
// if it's a number and it's even we sum += obj[key]


var obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  }
  
  var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
  };

// console.log(nestedEvenSum(obj1))
console.log(nestedEvenSum(obj2))