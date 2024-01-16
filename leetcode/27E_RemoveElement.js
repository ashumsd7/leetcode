var removeElement = function (nums, val) {

    let len = 0
    for (i = 0; i < nums.length; i++) {
        if (nums[i] == '_')
            break;
            nums[i] !== val ? len++ :  nums.splice(i, 1, "_")
    }
    nums.sort()
    return len
};


let nums = [3, 2, 2, 3]
let val = 3
console.log(removeElement(nums, val))
console.log('FINAL NUMS',nums)