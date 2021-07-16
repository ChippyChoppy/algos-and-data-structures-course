/**
 * Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

 */
// we must sort in place --> let sortedArray = [] no good!

const sortColors = (nums) => {
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (let i = 0; i < nums.length; i++) {
            let tempMax = 0;
            if (nums[i] > nums[i + 1]) {
                sorted = false
                tempMax = nums[i]
                nums[i] = nums[i + 1]
                nums[i + 1] = tempMax
            }
            console.log(`i = ${i} --> ${nums[i]} > ${nums[i + 1]} `, nums)

        }
        console.log(`loop`, nums)
        console.log(sorted)
    }
    return nums
}

console.log(sortColors([1, 0, 2, 1, 0]))
/*
Loop one --> nums = [1,0,2,1,0]
i = 0 1 > 0 // [0,1,2,1,0] --> sorted = false
i = 1 1 > 2 // [0,1,2,1,0]
i = 2 2 > 1 // [0,1,1,2,0]
i = 3 2 > 0 // [0,1,1,0,2]
Loop two --> is sorted true? Nope, it's false nums = [0,1,1,0,2]
i = 0 0 > 1 // [0,1,1,0,2]
i = 1 1 > 1 // [0,1,1,0,2]
i = 2 1 > 0 // [0,1,0,1,2] --> sorted = false
i = 3 1 > 2 // [0,1,0,1,2]
Loop three --> is sorted true? Nope, it's false, nums = [0,1,0,1,2]
i = 0 0 > 1 //[0,1,0,1,2]
i = 1 1 > 0 // [0,0,1,1,2] --> sorted = false
i = 2 1 > 1 // [0,0,1,1,2]
i = 3 2 > 1 // [0,0,1,1,2]
Loop four --> is sorted true? Nope, it's false, nums = [0,0,1,1,2]
i = 0 0 > 0 // [0,0,1,1,2]
i = 1 0 > 1 // [0,0,1,1,2]
i = 2 1 > 1 // [0,0,1,1,2]
i = 3 1 > 2 // [0,0,1,1,2]
sorted = true
Loop five --> is sorted true? Yes! It is! Break our while statement, and then hit our return (or in this case console.log)


*/

