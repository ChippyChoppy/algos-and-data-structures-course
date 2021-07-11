/* 
Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
*/

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

const productOfArray = (numArray) => {
   if (numArray.length === 0) return 1;
   return numArray[0] * productOfArray(numArray.slice(1));
}

console.log(productOfArray([1,2,3]))

// total = 1 * prod(2)