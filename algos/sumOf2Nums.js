/* Given a list of numbers nums and a number k, return whether any two elements from the list add up to k. You may not use the same element twice.

Note: Numbers can be negative or 0.

Constraints

*/

function solve(nums, k) {
    let sorted = nums.sort()
    console.log(nums)
    let begin = 0
    let end = nums.length - 1
    if (sorted.length < 2) return false;

    while (begin < end) {
        if (nums[begin] + nums[end] === k) {
            return true
        } else if (nums[begin] + nums[end] > k) {
            end--
        } else if (nums[begin] + nums[end] < k) {
            begin++
        }
    } return true
} 

console.log(solve([35,8,18,3,22], 11))