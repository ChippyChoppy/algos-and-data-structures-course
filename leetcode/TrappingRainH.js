// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

const trap = (height) => {
    let i = 1;
    let ptOne = i - 1;
    let ptTwo = i;
    let ptThr = i + 1;
    let start = height[ptOne];
    let middle = height[ptTwo];
    let end = height[ptThr];
    let rainCollected = 0;

    if (height.length < 3) return 0
    let drop = 0;
    while (i < height.length - 1) {
        if (start < middle) {
            i++
            console.log(start, "start")
        }
        else if (start > middle && middle < end && start <= end) {
            rainCollected += Math.min(start, end) * (ptThr - ptOne - 1)
        }
        else if (middle > end) {
            drop = middle - end
            ptThr += 1
            if (middle === end) {
                rainCollected += drop * (ptThr - ptTwo - 1)
                ptThr += 1
            }
            ptThr += 1
        }
        console.log(rainCollected)
    }

}
trap([0,1,0,2,1,0,1,3,2,1,2,1])