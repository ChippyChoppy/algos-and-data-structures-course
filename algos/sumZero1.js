// Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.

// sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3,3]
// sumZero([-2, 0, 1, 3]) // undefined
// sumZero([1, 2, 3]) // undefined

//this isn't best solution, time complex is o(n^2), quadratic, and not the best. Try again for O(n)

function sumZero(arr) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}

console.log(sumZero([-4, -2, -1, 0, 1, 2, 3, 5, 6]))
console.log(sumZero([-2, 0, 1, 3]))

