// 2 POINTERS METHOD : Assume Array is always sorted
// normal solu
function sumZero1(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === 0)
                return [nums[i], nums[j]]

        }
    }

}


// best solu using 2 Pointers
function sumZero2(nums) {
    let left = 0
    let right = nums.length - 1

    while (left < right) {
        let sum = nums[left] + nums[right]
        if (sum == 0) {
            return [nums[left], nums[right]]
        }
        else if (sum > 0) {
            right--
        } else {
            left++
        }
    }


}


let arr = [-6, -3, -2, 0, 1, 2, 4, 5,6, 7, 8]

console.log('sumZero2', sumZero2(arr))