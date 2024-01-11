var containsDuplicate = function (nums) {
    let hasMoreThanOneIteration = false
    const numCountObj = {}
    nums.forEach(num => numCountObj[num] ? numCountObj[num]++ : numCountObj[num] = 1)
    Object.values(numCountObj).forEach(val => val > 1 ? hasMoreThanOneIteration = true : '')
    return hasMoreThanOneIteration
};

console.log('hasMoreThanOneIteration', containsDuplicate([1, 2, 45, 4, 5]))