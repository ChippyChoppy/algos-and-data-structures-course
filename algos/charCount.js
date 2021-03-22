

function charCount(str) {
    // make object to return at end
    let result = {}
    // loop over string, for each character...
        // if the char is alphanumeric AND a key in object, add one to count
        // if the char is alphanumeric AND not in object, add it and set value to 1
        // if character is something else (spaces, punctuation, etc) don't do anything
    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        if( result[char] > 0) {
            result[char]++
        }
        else {
            result[char] = 1
        }
    }
    // return object at end
    return result
}
console.log(charCount("putting pieces in place"))