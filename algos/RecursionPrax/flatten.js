// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

function flatten(arr) {
    let flatArray = [];
    for (let i = 0; i < arr.length; i++) {
        console.log(flatArray, "line 11")
        console.log(Array.isArray(arr[i]), arr[i], "i:", i, "line 12")
        if (Array.isArray(arr[i])) {
            flatArray = flatArray.concat(flatten(arr[i]))
            console.log(flatArray, "line 16")
        } else {
            flatArray.push(arr[i])
            console.log(flatArray, "line 19")
        }
    }
    return flatArray
}

console.log(flatten([[[[[[[[[[1]]]]]]]]],[[[[2]]]],3,[4,5],[6,7]]))