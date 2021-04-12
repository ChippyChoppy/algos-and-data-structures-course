/* 
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers patter.

console.log(areThereDuplicates(1,2,3)) // false
console.log(areThereDuplicates(1,2,2)) // true
console.log(areThereDuplicates('a','b','c', 'a')) // true

Restrictions:
Time - O(n)
Space - O(n)

Bonus:
Time - O(n log n)
Space - O(1)
*/

// FREQUENCY COUNTER
function areThereDuplicates() {
    let collection = {}
    for(let val in arguments) {
        collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    }
    for(let key in collection) {
        if(collection[key] > 1) {
            return true
        }   
    }
     return false;
}

// MULTIPLE POINTERS
function areThereDupes(...args) {
    args.sort();
    let i = 0;
    let j = 1;
    while(j < args.length) {
        console.log(args)
        if(args[i] === args[j]) {
            return true;
        } else {
            i++, j++;
        }   
    }
    return false;
}

console.log(areThereDupes(1,2,3)) // false
console.log(areThereDupes(1,2,2)) // true
console.log(areThereDupes('a', 'b', 'c', 'a')) // true