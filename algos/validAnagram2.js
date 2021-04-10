function validAnagram2(first, second) {
    if (first.length !== second.length) {
        console.log(first.length)
        console.log(second.length)
        return false;
    }

    const lookup = {};
    
    for (let i=0; i < first.length; i++) {
        let letter = first[i];
        
        //if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
        console.log(letter)
    }

    for (let i = 0; i < second.length; i++) {
        let letter = second[i];
        //can't find letter orl etter is zero then it's not an anagram
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }
    return true;
}
console.log(validAnagram2('anagram', 'gramaa'))
