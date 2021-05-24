let n = 93

function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i ++) {
        total +=i;
    }
    return total;
}

function addUpToAgain(n) {
    return n * (n+1) / 2
}

console.log(addUpTo())
console.log(addUpToAgain())
console.log(n)










// Counting Operations
    // one plus sign, doesn't mean one operation. It's n operations (but also = is another operation, so it's like n*2 operations) ++ n additions and n assignments; let total = 0 is 1 assignment, let i = 1 is one assignment, <+ n comparisons
    // not a static number of operations 5n + 2 operations, regardless of exact number, the number of operations grows roughly in proportion with n

