var replaceElements = function (arr) {
    let resArr = [...arr]
    if (resArr.length == 1) {
        resArr = [-1]
        return resArr
    }
    console.log('INPUTa', resArr)
    resArr.forEach((_, idx) => {
        let nextMax = resArr[idx + 1]
        console.log('nextMax1', nextMax)
        for (i = idx + 1; i < resArr.length; ++i) {
            console.log('will be comparing', resArr[i], nextMax)
            // console.log('will be comparing', resArr[i] > nextMax)
            // console.log('I last val',i,idx)
            if (resArr[i] >= nextMax) {
                console.log('Yessssssssssss')
                console.log('Yes', resArr[i], "is > than", nextMax)
                nextMax = resArr[i]
                resArr[idx] = nextMax
            }
        }


    })
    resArr[resArr.length - 1] = -1
    return resArr



};

console.log(replaceElements([17,18,5,4,6,1]))