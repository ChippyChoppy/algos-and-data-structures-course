function winners(place, scores) {
    const hiToLo = scores.sort((a,b) => b - a)
    let winners = 0;


}
/**
 * [20,40,60,80,100]
 * 
 * hiToLo = [100,80,60,60,60,40,20]
 * place = 3
[i]     place-1     hiToLo[i]       action
 0 <=   2           100  -->        winners += 1
 1 <=   2           80   -->        winners += 1
 2 <=   2           60   -->        winners += 1 let lastPlace = 60
        lastPlace
 3      60          60 === 60       winners += 1
 4      60          60 === 60       winners += 1
 5      60          40 <   60       return winners             \

{100: 1, 80: 2, 60: 3, 40: 1, 20: 1}


arr.forEach(el => {
    obj[value] ? 
})

 */
