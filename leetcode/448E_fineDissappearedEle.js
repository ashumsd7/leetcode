var findDisappearedNumbers = function (nums) {

    //get len
    const uniqueSet = new Set();

    let resArr = []
    // loop from 0 to n
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= nums.length)
            uniqueSet.add(nums[i])

    }
    console.log('resArr', resArr)
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= nums.length)
            uniqueSet.add(nums[i])

    }
    console.log([...uniqueSet])

    return uniqueSet


};



let arr = [4, 3, 2, 7, 8, 2, 3, 1]
console.log(findDisappearedNumbers(arr))