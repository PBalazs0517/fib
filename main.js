function fib(n) {
    const arr = [];
    let num = 0;
    for( let i = 0; i < n; i++ ) {
        arr.push( num );
        num == 0 ? num++ : num = arr[i - 1] +  arr[i];
    };
    return arr;
};

console.log("Fib");
console.log(fib(10));

function fibRec(n, arr = [], times = n) {
    return arr.length == 0 ? arr.push(0) : arr.push(n), times == arr.length ? arr : fibRec(arr.length == 1 ? 1 : arr[arr.length - 2] +  arr[arr.length - 1], arr, times = times );
}

console.log("Fib REC");
console.log(fibRec(10));