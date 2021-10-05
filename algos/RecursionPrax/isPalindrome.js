// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forware and backward). Otherwise return false.

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str) {
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    
    if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1))   
    console.log(str[-1])
    return false;
}
console.log(isPalindrome('racecar'))

/* 
amanaplanacanalpanama
a === a
manaplanacanalpanam
m === m
anaplanacanalpana
a === a 
naplanacanalpan
n === n
aplanacanalpa
a === a
planacanalp
p === p
lanacanal
l === l
anacana
a === a 
nacan
n === n
aca
a === a
c
str.length === 1
true;
*/
