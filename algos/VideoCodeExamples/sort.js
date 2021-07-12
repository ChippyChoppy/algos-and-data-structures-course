/**
 * Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

 */

const sortColors = (nums) => {
    let sorted = false; 
    while (!sorted) {
        
        sorted = true;
        for (let i = 0; i < nums.length-1; i++) {
            let tempMax = 0
            if (nums[i] > nums[i + 1]) {
                sorted = false
                tempMax = nums[i];
                nums[i] = nums[i + 1]
                nums[i + 1] = tempMax
            }
            // console.log(`i = ${i} --> ${nums[i]} > ${nums[i + 1]} `, nums)
        }
        // console.log(`loop ${j}`, nums)
        // console.log(sorted)
    }
    return nums
}

console.log(sortColors([3,4,7,9,18,0,23,4,5,1,13,8,56,98,2]))