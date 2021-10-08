// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']


const capitalizeFirst = (arr) => {
    if (arr.length === 1) return [arr[0][0].toUpperCase() + arr[0].substr(1)];
    let capitalArray = capitalizeFirst(arr.slice(0, -1));
    console.log(capitalArray)
    const capitalString = (arr.slice(arr.length-1)[0][0].toUpperCase() + arr.slice(arr.length-1)[0].substr(1));
    capitalArray.push(capitalString)
    return capitalArray
}

console.log(capitalizeFirst(['car','taco','banana']))