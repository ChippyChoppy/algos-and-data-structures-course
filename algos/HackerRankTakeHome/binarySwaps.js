const minSwaps = (arr) => {
    let loSwaps = 0;
    let hiSwaps = 0;
    let onesFirst = 0;
    let zerosFirst = 0;

    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] == 0) {
            onesFirst += 1
        } else {
            loSwaps += onesFirst
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            zerosFirst += 1
        } else {
            hiSwaps += zerosFirst
        }
    }
    return Math.min(loSwaps, hiSwaps)
}

console.log(minSwaps([0,1,0,1,0]))