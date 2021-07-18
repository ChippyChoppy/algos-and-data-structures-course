function funWithAnagrams(text) {
    
    for(let i = 0; i < text.length; i++ ) {    
        for(let j = text.length - 1; j > i; j--){
            let sortedFirst = text[i].split('').sort().join('')
            let sortedCompare = text[j].split('').sort().join('')
            
            if (sortedFirst == sortedCompare) {
                text.splice(j, 1)
                console.error(text)
            }
        }
    }
    return text.sort()
}
arr1 = ["code", "cdeo","odec", "cedo", "jumpjump","pmuujjmp", "jmmjuupp", "corn","ronc", "corny"]

console.log(funWithAnagrams(arr1))