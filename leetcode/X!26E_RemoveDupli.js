var removeDuplicates = function (nums) {
    // console.log(nums)
    let newArr=[...nums]
    let resObj = {}
    for (i = 0; i < newArr.length; i++) {
        if (resObj[newArr[i]] == undefined) {
            resObj[newArr[i]] = 1
        } 
    }

    // console.log('resObj', Object.keys(resObj))

    let resArr = Object.keys(resObj)
    let len = resArr.length
    // console.log(resArr.length, nums.length)
    for (i = 0; i < resArr.length; i++) {
        resArr[i] = +resArr[i]
    }
    for (i = resArr.length; i < nums.length; i++) {
        resArr.push(nums[i])
    }

    // console.log('resArr', resArr)
    nums = [...resArr]


    // console.log('k  is', len)
    console.log('res 1 Arr ', nums)
    return len

};


function removeDuplicates2(nums) {
    if (nums.length === 0) {
        return 0;
    }

    let k = 1; // Initialize the count of unique elements to 1
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[k - 1]) {
            nums[k] = nums[i]; // Overwrite the next unique element
            k++;
        }
    }
    console.log("res 2", nums)
    // console.log("res 2 k is", k)
    return k;
}



let arr = [1,1,2]

console.log('removeDuplicates', removeDuplicates(arr))
console.log('removeDuplicates', removeDuplicates2(arr))