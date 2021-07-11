/**
 * Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

 */

const sortColors = (nums) => {
    let sorted = false;
    while(!sorted) {
        sorted = true;
        for(let i = 0; i< nums.length; i++) {
            let tempMax = 0
            if(nums[i] > nums[i+1]) {
                sorted = false
                tempMax = nums[i];
                nums[i] = nums[i + 1]
                nums[i+1] = tempMax
            }
        }
        console.log("log",nums)
    }
    return nums
}

console.log(sortColors([1,0,1,1,2,0]))