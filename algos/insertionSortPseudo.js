function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        let j = i - 1
        for ( ; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
            console.log(arr)
        }
        arr[j + 1] = currentVal
    }
    console.log(arr)
    return arr;
}

insertionSort([2,1,9,76,4])