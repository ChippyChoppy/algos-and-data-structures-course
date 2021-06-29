/*
  Reverse String Function
  Given one argument, a string of characters (input),
  write a function that will reverse the input and return it.
  @Example
  reverse('hello') -> olleh
  reverse('blue') -> eulb
*/
function reverse(str) {
    if(str.length <= 1) return str;
    return reverse(str.slice(1)) + str[0]
}
console.log(reverse('blue'))

function reverseAgain(str) {
  return str.split('').reverse().join('')
}
console.log(reverseAgain('holy moly'))


/* hello
ello + h
llo + e
lo + l
o+ l
"" + o
o + l
ol + l
oll + e
oll + e
olle + h */
