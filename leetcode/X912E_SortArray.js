var sortArray = function (nums) {
    const res = []
    let arr = nums
    console.log('Arr is', arr)



    for (i = 0; i < arr.length; i++) {
        console.log('start index | len', i, arr.length)

        let min
        for (i = 0; i < arr.length; i++) {
            if ((arr[i] !== '&')) {
                min = arr[i]
                break
            }
        }
        if (res.length == arr.length)
            return res
        let indexOfMin = 0
        console.log('First min is', min)
        for (j = 0; j < arr.length; j++) {
            if ((arr[j] == '&')) {
                console.log('   return becox X', arr[j], j)
                min = min
            }

            if (min >= arr[j]) {
                console.log('comparing and min is greater or = to curr', min, arr[j])
                min = arr[j]
                indexOfMin = j
            }

        }
        console.log('Min final', min, indexOfMin)
        res.push(min)

        arr.splice(indexOfMin, 1, '&')
        console.log('RES', res)
        console.log('Arr', arr)
    }


    // console.log('Min', min)

    console.log('abcd', res)
    return res

};



const arr = [-2, 3, -5]
console.log(sortArray(arr))