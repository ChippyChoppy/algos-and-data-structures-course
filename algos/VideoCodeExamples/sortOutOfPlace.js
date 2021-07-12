let sortColors = (nums) => {
    let sorted = []
    sorted[0] = Math.min(nums[0], nums[1])
    sorted[1] = Math.max(nums[0], nums[1])
    console.log(sorted)

    for (let i = 2; i < nums.length; i++) {
        if (nums[i] <= sorted[0]) {
            sorted.unshift(nums[i])
            console.log("unshifted", sorted)
        }
        if (nums[i] >= sorted[i-1]) {
            sorted.push(nums[i])
            console.log("pushed", sorted)
        }
    }
}

sortColors([1,0,1,3,1])