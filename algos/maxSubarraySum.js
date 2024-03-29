// SLIDING WINDOW
    // Write a funciton called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

/* 
console.log(maxSubarraySum([1,2,5,2,8,1,5], 2)) // 10
console.log(maxSubarraySum([1,2,5,2,8,1,5], 4)) // 17
console.log(maxSubarraySum([4,2,1,6],1)) // 6
console.log(maxSubarraySum([4,2,1,6,2],4)) // 13
console.log(maxSubarraySum([],4)) // null
*/

/* nested loop, probably  not best solution 
    BigO(n^2) this is not a sliding window
*/
function maxSubarraySum(arr, n) {
    if ( n > arr.length) {
        return null;
    }
    let max = -Infinity;
    for (let i = 0; i < arr.length - n + 1; i++) {
        temporary = 0;
        for (let j = 0; j < n; j++) {
            temporary += arr[i + j];
        }
        if (temporary > max) {
            max = temporary;
        }
        console.log(temporary, max)
    }
    return max;
}
// console.log(maxSubarraySum([1,2,5,2,8,1,5], 2))
// console.log(maxSubarraySum([1,2,5,2,8,1,5], 4)) // 17
// console.log(maxSubarraySum([4,2,1,6],1)) // 6
// console.log(maxSubarraySum([4,2,1,6,2],4)) // 13
// console.log(maxSubarraySum([],4)) // null

function maxSubarraySum2(arr, n) {
    let maxSum = 0;
    let temporarySum = 0;
    if (arr.length < n) return null;
    for (let i = 0; i < n; i++) {
        maxSum += arr[i];
    }
    temporarySum = maxSum;
    for (let i = n; i < arr.length; i++) {
        temporarySum = temporarySum - arr[i - n ] + arr[i];
        maxSum = Math.max(maxSum, temporarySum);
    }
    return maxSum;
}

console.log(maxSubarraySum2([1,2,5,2,8,1,5], 2)) // 10
console.log(maxSubarraySum2([1,2,5,2,8,1,5], 4)) // 17
console.log(maxSubarraySum2([4,2,1,6],1)) // 6
console.log(maxSubarraySum2([4,2,1,6,2],4)) // 13
console.log(maxSubarraySum2([],4)) // null