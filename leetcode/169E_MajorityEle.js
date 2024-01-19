var majorityElement = function (nums) {
    let max = Math.floor(nums.length / 2)

    let countObj = {}
    for (i = 0; i < nums.length; i++)
        countObj[nums[i]] !== undefined ? countObj[nums[i]]++ : countObj[nums[i]] = 1



    let uniqueValArray = Object.keys(countObj)
    console.log('countObj', countObj)
    console.log("uniqueValArray", uniqueValArray)


    let res = uniqueValArray[0]

    console.log('res', res)
    console.log('max', max)
    console.log('uniqueValArray.length', uniqueValArray.length)


    for (i = 0; i < uniqueValArray.length; i++) {
        console.log('ruin')
        console.log("Pahle", max, countObj[uniqueValArray[i]])
        if (max < countObj[uniqueValArray[i]]) {
            console.log(max, countObj[uniqueValArray[i]])
            res = uniqueValArray[i]
        }

    }
    return res
};



let nums = [3,3,4]
console.log(majorityElement(nums), "res")