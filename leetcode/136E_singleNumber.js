var singleNumber = function (nums) {


    const countObj = {}

    for (i = 0; i < nums.length; i++) {
        if (nums[i] in countObj) {
            countObj[nums[i]] = countObj[nums[i]] + 1
        } else {
            countObj[nums[i]] = 1
        }
        // countObj[nums[i]]!==undefined ? countObj[i]=countObj[i]+1 : countObj[i]=1
    }

    console.log('countObj', countObj)

    let countArray = Object.values(countObj)

    console.log('countArray',countArray)


    let countOneIndex = 0
    for (i = 0; i < countArray.length; i++) {
        if (countArray[i] == 1){
            countOneIndex = i
            break
        }
         
    }

    let objectKeys= Object.keys(countObj)

    console.log('objectKeys',objectKeys)
    console.log('countOneIndex',objectKeys[countOneIndex])
};











const nums = [4,1,2,1,2]

console.log('singleNumber', singleNumber(nums))