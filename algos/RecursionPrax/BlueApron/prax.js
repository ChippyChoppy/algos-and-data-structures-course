function MyFunc() {
    this.twice = function(num) {
        if (num < 2) {
            return "num should be greater than 2"
        }
        return num * 2
    }
}

const myfunc = new Myfunc();
const list = new Array(0,4,1,3);
for(let i =0; i<4; i++){
    try {
        const res = myfunc.twice(list[i]);
        console.log(res);
    } catch (e) {
        console.log(e);
    }
}

let doesThisWork = new Array(1,2,3)
console.log(doesThisWork)