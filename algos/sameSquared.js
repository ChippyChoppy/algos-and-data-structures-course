// Write a function called same, which accepts two arrays.
// the function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

// same([1,2,3], [4,1,9]) // true
// same([1,2,3], [1,9]) // false
// same([1,2,1], [4,4,1]) // false (must be same frequency)

function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }
    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if (correctIndex === -1) {
            return false;
        }
        console.log(arr2)
        arr2.splice(correctIndex, 1)
    }
    return true    
}

console.log(same([1,2,3,4,8], [64,1,16,9,4]))