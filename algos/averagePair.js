/* 
Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

Bonus Constraints
Time: O(n)
Space: O(1)

console.log(averagePair([1,2,3],2.5)) // true
console.log(averagePair([1,3,3,5,6,7,10,12,19],8)) // true
console.log(averagePair([-1,0,3,4,5,6],4.1)) // false
console.log(averagePair([],4)) // false
*/

function averagePair(arr, targetAve) {
    let targetNum = targetAve * 2 
    let beg = 0
    let end = arr.length - 1
    if (arr.length < 2) return false;
    if (!Number.isInteger(targetNum)) return false;

    while (beg < end) {
        if (arr[beg] + arr[end] === targetNum) return true
        else if (arr[beg] + arr[end] > targetNum) {
            end--
        } else if (arr[beg] + arr[end] < targetNum) {
            beg++
        }
    }
}
console.log(averagePair([1,2,3],2.5)) // true
console.log(averagePair([1,3,3,5,6,7,10,12,19],8)) // true
console.log(averagePair([-1,0,3,4,5,6],4.1)) // false
console.log(averagePair([],4)) // false