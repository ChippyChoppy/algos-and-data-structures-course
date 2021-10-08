/**
 * Write a recursive function called capitalizeWords. 
 * Given an array of words, return a new array containing each word capitalized.
 */

function capitalizedWords(array) {
    if (array.length === 1) return [array[0].toUpperCase()]

    let allCaps = capitalizedWords(array.slice(0,-1))
    allCaps.push(array.slice(array.length-1)[0].toUpperCase())
    return allCaps
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizedWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']