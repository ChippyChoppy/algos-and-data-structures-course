function findUniquePairs(numbers, target) {
    numbers.sort(function(a,b) {
        return a-b
    })
    let sortedArr = [...new Set(numbers)]
    console.log("unique", sortedArr)
    let j = sortedArr.length - 1
    let sumArr = []

    console.log(sortedArr)
    for(let i = 0; i < j; i++) {
        if(sortedArr[i] + sortedArr[j] < target) {
            i++
        }
        if(sortedArr[i] + sortedArr[j] !== target) {
            j--;
            i--
        }
        
        if(sortedArr[i] + sortedArr[j] === target) {
            sumArr.push([sortedArr[i], sortedArr[j]])
            j--
            console.log(sumArr)
        }
        
    }
    return sumArr
}

let arr = [9,2,10,1,5,3,3]

console.log(findUniquePairs(arr, 12))

let doesThisWork = [1,2,3]
console.log(doesThisWork)