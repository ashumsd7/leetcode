var filter = function (arr, fn) {
    const resArr = []
    for (i = 0; i < arr.length; i++)
        fn(arr[i], i) ? resArr.push(arr[i]) : ''
    return resArr
};



let arr = [0,10,20,30]
let fn = function greaterThan10(n) { return n > 10; }

console.log(filter(arr, fn))