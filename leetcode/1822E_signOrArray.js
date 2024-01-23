var arraySign = function (nums) {

    if (nums.includes(0))
        return 0
    let countNeg = 0
    for (i = 0; i < nums.length; i++) {
        if (nums[i] < 0)
            countNeg++

    }

    if (countNeg % 2 == 0) return 1
    return -1



};


const nums = [-1,1,-1,1,-1]

console.log('arraySign', arraySign(nums))