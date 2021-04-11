/* Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, retun -1 */

/*
console.log(search([1,2,3,4,5,6], 4)) // 3
console.log(search([1,2,3,4,5,6], 6)) // 5
console.log(search([1,2,3,4,5,6], 11)) // -1
*/

// linear search, time complexity O(N)
function searchLinear(arr, n) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === n) {
            return i;
        }
    }
    return -1;
}


// intro to binary search, taking large sets of data and breaking into smaller chuncks of data to speed searches. 

// Time complexity - Log(N) -this is binary search!
function search(arr, n) {
    let min = 0
    let max = arr.length - 1;
    
    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currentElement = arr[middle];

        if (arr[middle] < n) {
            min = middle + 1;
        }
        else if (arr[middle] > n) {
            max = middle - 1;
        }
        else {
            return middle;
        }
    }
    return -1;
}

console.log(search([1,2,3,4,5,6], 4)) // 3
console.log(search([1,2,3,4,5,6], 6)) // 5
console.log(search([1,2,3,4,5,6], 11)) // -1