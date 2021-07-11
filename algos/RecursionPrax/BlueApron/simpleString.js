/*
  Simple String Sort Function
  Given two arguments, a string of characters (input) and a sort string (sortStr),
  implement a simple sort function that returns the characters to sort in the order
  specified by the sort string. If any characters do not appear in the sort string,
  they go at the end, in any order.
  @Example
  sort('banana', 'nab') -> 'nnaaab'
  sort('house', 'soup') -> 'souhe' or 'soueh'
*/

// house
// houe 
// hue 
// he 
// sou + he


// { n : 0, a : 1, b : 2 }
/* 
let newStr = 
for ( key in objects) {
    for(let i = 0; i < input.length; i++) {
        if( input[i] !== key) {
            newStr.concat(input[i])
        }
    }
}
*/

function sort(input, sortStr) {

    // const sortHash = {}
    // for (let char in sortStr) {
    //     sortHash[sortStr[char]] = char
    // }
    // console.log(sortHash)
    
    // let newStr = ""

    // for(key in sortHash) {
    //     for (let i = 0; i < input.length; i++) {
    //         if (input[i] !== key) {
    //             newStr += input[i]
    //         }
    //     }                
    //     console.log(newStr)
    // }
    
    // let usedLetters = ""
    // let unusedLetters = ""

    // for (let i = 0; i < sortStr.length; i++) {
    //     for (let j = 0; j < input.length; j++) {
    //         if (sortStr[i] !== input[j]) {
    //             unusedLetters += input.substring(j, j+1)
    //             console.log("un", unusedLetters)
    //             j++
    //         }
    //         if (sortStr[i] === input[j]) {
    //             usedLetters = usedLetters.concat(input[j])
    //             console.log("used", usedLetters)
    //             // console.log("un", unusedLetters)
    //         }
    //     }


    // }
    // return usedLetters



}
console.log(sort('house', 'soup'))

const simpleString = (string, sortString) => {
    const stringObj = {}
    string.split('').forEach(char => {
        if(stringObj[char]){
            stringObj[char] += 1
        } else {
            stringObj[char] = 1
        }
    })
    let sortedString = ''

    sortString.split('').forEach(sorter => {
        // let count = stringObj[sorter]
        while(stringObj[sorter]){
            sortedString = sortedString + sorter
            stringObj[sorter] -= 1
        }
        // delete stringObj[sorter]

    })
    for(let entry in stringObj) {
        while(stringObj[entry]) {
            sortedString = sortedString + entry
            stringObj[entry] -= 1
        }
    }
    // Object.entries(stringObj).forEach(entry => {
    //     const char = entry[0]
    //     // let count = entry[1]
    //     while(stringObj[char]){
    //         sortedString = sortedString + char
    //         stringObj[char] -= 1
    //     }
    // })

    return sortedString
}
console.log(simpleString('house', 'soup'))