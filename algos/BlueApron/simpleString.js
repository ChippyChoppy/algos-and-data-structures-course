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
function sort(input, sortStr) {
    //
    let usedLetters = ""
    let unusedLetters

    for (let i = 0; i < sortStr.length; i++) {
        for (let j = 0; j < input.length; j++) {
            if (sortStr[i] !== input[j]) {
                unusedLetters = input.slice(j)
                console.log("un", unusedLetters)
                j++
            }
            if (sortStr[i] === input[j]) {
                usedLetters = usedLetters.concat(input[j])
                console.log("used", usedLetters)
                // console.log("un", unusedLetters)
            }
        }


    }
    return usedLetters
}
console.log(sort('house', 'soup'))
