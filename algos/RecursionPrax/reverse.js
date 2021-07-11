/*
Write a recursive function called reverse which accepts a string and returns a new string in reverse.
*/

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

const reverse = (str) => {
    if(str.length <= 1) return str;
    return reverse(str.slice(1)) + str[0]
}

console.log(reverse(["h","e","l","l","o"]))
/* pooh + w 
poo + h
po + o 
p + o 
[] + p
p o o h w
*/

const nrReverse = (str) => {
    if(str.length <= 1) return str;
    let reverseStr = [];
    for(let i = 0; i < str.length; i++) {
        reverseStr.unshift(str[i])
    }        return reverseStr.join("")

}

console.log(nrReverse('whoop'))