function countDown(num) {
    if (num <= 0) {
        console.log("All Done!");
        return; // <-- this is what stops from continuing to console.log(-1), could also use else break
    }
    console.log(num);
    num--;
    countDown(num);
}

countDown(5)

// example of a recursive function


// example of same function done non-recursive
// funciton countDownNonRecursive(num) {
//     for(var i = num; i > 0; i--) {
//         console.log(i);
//     }
//     console.log("All Done!")
// }