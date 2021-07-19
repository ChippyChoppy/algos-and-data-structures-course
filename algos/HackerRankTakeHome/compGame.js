function winners(place, scores) {
    let winners = 0;
    let placesObj = {}
    scores.forEach((score) => {
        // console.log(scores)
        placesObj[score] ? placesObj[score] += 1 : placesObj[score] = 1
    })  
// sort((a,b) => b[0]-a[0])
//    console.log(sortedCountedWinners[0])
   let sortedCountedWinners = Object.entries(placesObj).reverse()
    for(let i = 0; i < sortedCountedWinners.length; i++) {
        if (sortedCountedWinners[i][0] === '0') {
            sortedCountedWinners[i][1] = 0
            // console.log(sortedCountedWinners)
        }
        if (winners <= place) {
            winners += sortedCountedWinners[i][1]
        }
        
    }
    return winners
}
console.log(winners(5, [10,8,4,0,0,0]))
console.log(winners(75, [100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,95,95,95,90,90,90,90,90,90,90,90,90,90,90,90,90,90,85,85,85,85,85,85,85,85,85,85,99,99,99,99,99,99,99,99,99,99,99,99,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55]))
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
k = 9
{100: 3, 80: 1, 60: 10, 40: 1, 20: 1}
winners = 0
100 --> 3   winners += 3    3 < 9   keep going
80 --> 1   winners += 1    4 < 9   keep going
60 --> 10  winners += 10   14 > 9  return 14.


arr.forEach(el => {
    obj[value] ? 
})

 */
