
var counter1 = 0;
var counter2 = 0;
let memo = [];

function fib(n){
    
    counter1++;
    
    if (memo[n] !== undefined) return memo[n];

    if (n === 0 || n === 1) {
        //console.log("inside 0 & 1")
        return n;
    }

    memo[n] = fib(n-1) + fib(n-2);
    return memo[n];

}



const fibIterative = (n) => {
    let fibArray = [];

    fibArray[0] = 0;
    fibArray[1] = 1;

    for (let i = 2; i <= n; i ++) {
        counter2++;
        fibArray[i] = fibArray[i-1] + fibArray[i-2];
        console.log(fibArray);
    }

    // return fib at n
    return fibArray[n];
}

//fib(40);
fibIterative(7);

//console.log(counter1);
//console.log(counter2);
//console.log("memo:" + memo);
