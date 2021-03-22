
// FOR LOOP
// function charCount(str) {
//     // make object to return at end
//     let obj = {}
//     // loop over string, for each character...
//         // if the char is alphanumeric AND a key in object, add one to count
//         // if the char is alphanumeric AND not in object, add it and set value to 1
//         // if character is something else (spaces, punctuation, etc) don't do anything
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i].toLowerCase();
//         if( /[a-z0-9]/.test(char)) {
//             if (obj[char] > 0) {
//                 obj[char]++
//             } else {
//                 obj[char] = 1
//             }
//         }
//     }
//     // return object at end
//     return obj
// }

// FOR OF LOOP
function charCount(str) {
    let obj = {};
    for ( let char of str) {
        char = char.toLowerCase();
        // this is a "regular expression"
        if (isAlphaNumeric(char)) {
            obj[char] = ++obj[char] || 1
            // if (obj[char] > 0) {
            //     obj[char]++;
            // } else {
            //     obj[char] = 1;
            // };
        }
    }
    return obj;
}

function isAlphaNumeric(char) {
    let code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) && //numeric (0-9)
        !(code > 64 && code < 91) && //upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
        return false;
    }
    return true;
    
}

console.log(charCount("SuperCalifragilisticexpialodocious 69"))
