var plusOne = function (digits) {

    let sum = digits[0].toString()
    for (i = 1; i < digits.length; i++) {
        digits[i] = digits[i].toString()
        sum += digits[i]
    }

    console.log('sum', typeof sum)
    // sum = Number(sum)
    sum= BigInt(sum.toString())
    sum =sum + BigInt(1)
    const res=sum + BigInt(1)
    console.log('Res', res)
    console.log('After adding 1', sum)
    sum = sum.toString()
    console.log(typeof sum)
    console.log('sum arr', sum.split(''))
    sum = sum.split('')

    for (i = 0; i < sum.length; i++) {
        sum[i] = Number(sum[i])

    }
    console.log('res', sum)
    return sum


};

let arr = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
console.log('plusOne', plusOne(arr))