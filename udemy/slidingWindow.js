// normal solu


const maxSubArraySumBasic = (arr, sum) => {

    let total = 0
    for (i = 0; i < arr.length - sum; i++) {

        let newTotal = 0;
        for (j = i; j < i + sum; j++) {
            newTotal += arr[j]
        }
        if (newTotal > total)
            total = newTotal

        console.log(i, newTotal)
    }
    console.log('total', total)
    return total

}



const maxSubArraySumSW = (arr, sum) => {

    let total = 0;
    for (i = 0; i < sum; i++) {
        total += arr[i]
    }

    console.log('sum of first num', total)

    let k = 0;
    let newTotal=total
    for (j = sum; j < arr.length; j++) {
        // let newTotal = tempSum
        console.log('newTotal',newTotal)
        newTotal += arr[j]
        newTotal -= arr[k]
        console.log(`before +/- ${total} , going to + ${arr[j]} which index is ${j} and subtract ${arr[k]} which index is ${k} => after +/- ${newTotal}`)
        k++
        if (newTotal > total)
            total = newTotal
    }

    console.log('Hey this the solun', total)


}



let arr = [2, 6, 9, 2, 1, 8, 5, 6, 3]
let sum = 3
// console.log(maxSubArraySumBasic(arr, sum))
console.log(maxSubArraySumSW(arr, sum))