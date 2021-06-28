/*
Write a recursive function called reverse which accepts a string and returns a new string in reverse.
*/

const reverse = (str) => {
    if(str.length <= 1) return str;
    return reverse(str.slice(1)) + str[0];
}

console.log(reverse('heck yeah cool guy!'))

/* 
str = hello
ello + h
llo + e
lo + l
o + l
[] + o
o + l
ol + l
oll + e
olle + h
olleh
*/

const nrReverse = (str) => {
    if(str.length <= 1) return str;
    let reverseString = [];
    for(let i = 0; i < str.length; i++) {
        reverseString.unshift(str[i])
    }
    return reverseString.join("")
}

console.log(nrReverse('yomama'))