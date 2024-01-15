var reduce = function (nums, fn, init) {
    if (!nums.length) return init
    // let res = init
    for (i = 0; i < nums.length; i++)
    init = fn(init, nums[i])
    return init
};



let arr = [1,2,3,4]
let fn =function sum(accum, curr) { return accum + curr; }

console.log(reduce(arr, fn,0))