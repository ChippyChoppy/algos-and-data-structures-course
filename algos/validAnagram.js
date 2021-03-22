// given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman

// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
//validAnagram('anagram', 'nagaram') // true
// validAnagram('rat', 'car') //false
// validAnagram('awesome', 'awesom') //false
// validAnagram('qwerty', 'qeywert') //true
// validAnagram('texttwisttime', 'timetwisttext') //true

function validAnagram(str1, str2) {
    if(str1.length !== str2.length){
        return false
    }
    let count1 = {}
    let count2 = {}
    for (let val of str1) {
        count1[val] = (count1[val] || 0) + 1
    }
    for (let val of str2) {
        count2[val] = (count2[val] || 0) + 1
    }
    for (let key in count1) {
        if(!(key in count2)) {
            return false
        }
        if(count2[key] !== count1[key]) {
            return false
        }
    }
    return true
}

console.log(validAnagram('racecar', 'carrace'))