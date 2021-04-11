// SLIDING WINDOW
    // Write a funciton called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

/* 
console.log(maxSubarraySum([1,2,5,2,8,1,5], 2)) // 10
console.log(maxSubarraySum([1,2,5,2,8,1,5], 4)) // 17
console.log(maxSubarraySum([4,2,1,6],1)) // 6
console.log(maxSubarraySum([4,2,1,6,2],4)) // 13
console.log(maxSubarraySum([],4)) // null
*/

function maxSubarraySum(arr, n) {
    if ( n > arr.length) {
        return null;
    }
    let max = -Infinity;
    for (let i = 0; i < arr.length - n + 1; i++) {
        temp = 0;
        for (let j = 0; j < n; j++) {
            temp += arr[i + j];
        }
        if (temp > max) {
            max = temp;
        }
    }
    return max;
}
console.log(maxSubarraySum([1,2,5,2,8,1,5], 2))
console.log(maxSubarraySum([1,2,5,2,8,1,5], 4)) // 17
console.log(maxSubarraySum([4,2,1,6],1)) // 6
console.log(maxSubarraySum([4,2,1,6,2],4)) // 13
console.log(maxSubarraySum([],4)) // null