// Implement a function called countUniqueValues, which accepts a sorted array, and count the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

// countUniqueValues([1,1,1,1,1,2]) // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2,-1,-1,0,1]) // 4

function countUniqueValues(arr) {
    let left = 0
    let right = 1
    while (left < right && right < arr.length) {
        if (arr[left] === arr[right]) {
            arr.splice(right, 1)
        } else {
            left++, right ++
        } 
    }
    return arr.length
}

console.log(countUniqueValues([1,1,1,2,2,3,4,5,5]))
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]))

// [1,1,1,2,2,3,4,5,5]

/* 
1 vs 1
[1,1,2,2,3,4,5,5]
1 vs 1 
[1,2,2,3,4,5,5] 
1 vs 2
[1,2,2,3,4,5,5] 
2 vs 2 
[1,2,3,4,5,5] 
2 vs 3
[1,2,3,4,5,5] 
3 vs 4
[1,2,3,4,5,5] 
4 vs 5
[1,2,3,4,5,5] 
5 vs 5
[1,2,3,4,5] 
*/