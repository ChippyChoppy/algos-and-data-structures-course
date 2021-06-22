// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

// This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead. 

/* Examples:
minSubArrayLen([2,3,1,2,4,3], 7)
minSubArrayLen([2,1,6,5,4], 9)
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)
minSubArrayLen([1,4,16,22,5,7,8,9,10], 39)
minSubArrayLen([1,4,16,22,5,7,8,9,10], 55)
minSubArrayLen([4,3,3,8,1,2,3], 11)
minSubArrayLen([1,4,16,22,5,7,8,9,10], 95)
*/

function minSubArrayLen(arr, int) {
   let total = 0;
   let start = 0;
   let end = 0;
   let minLen = Infinity;
   
   while (start < arr.length) {
       // if current window doesn't add up to int move window to the right
       if (total < int && end < arr.length) {
           total += arr[end];
           end++;
       } 
       // if current window adds to at least int, then try shrinking window
       else if (total >= int) {
           minLen = Math.min(minLen, end-start);
           total -= arr[start];
           start++;
       }
       // current total less than required total, but reach end 
       else {
           break;
       }
   }
   return minLen === Infinity ? 0 : minLen;
}    

console.log(minSubArrayLen([2,3,1,2,4,3], 7))
