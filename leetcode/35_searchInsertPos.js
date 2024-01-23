var searchInsert = function (nums, target) {

    if (target < nums[0])
        return 0
        if (target == nums[0] && nums.length==1)
        return 0

    for (i = 0; i < nums.length; ++i) {
        if (nums[i] <= target && nums[i + 1] > target) {
            console.log('******', nums[i] <= target, nums[i + 1] >= target)
            console.log('******', nums[i], "<=", target, "_____", nums[i + 1], " >=", target)
            console.log('Index',i)
            return i 



        }
        console.log('i', i)
        if (i == nums.length - 1)
            return nums.length

    }

};

let nums =[1,3,5,6]
console.log('searchInsert', searchInsert(nums, 2))