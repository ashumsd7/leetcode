var map = function (arr, fn) {
    for (i = 0; i < arr.length; i++)
        arr[i] = fn(arr[i], i)
    return arr
};



let arr = [10, 20, 30]
let fn = function plusone(n) { return n + 1; }

console.log(map(arr, fn))