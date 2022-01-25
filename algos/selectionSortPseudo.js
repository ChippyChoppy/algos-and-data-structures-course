const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let min = i
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j
      }
    }
    if (i !== lowest) {
      let temp = array[i]
      array[i] = array[min]
      array[min] = temp
    }
  }
  console.log(array)
}
console.log(selectionSort([34, 2, 10, 19, 17, 3]))
