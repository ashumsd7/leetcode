var addDigits = function (num) {
    if (num <= 9)
        return num

let oldsSum=0
    do {

        let splittedNum = num.toString().split('')
        let sum = 0
        console.log('.splittedNum', splittedNum)
        for (i = 0; i < splittedNum.length; i++) {

            sum = sum + Number(splittedNum[i])
        }

        console.log('Sum is ', sum)
        
        num = sum



    }
    while (num > 9)

    return num

    // console.log('Sum', sum)
};

console.log(addDigits(38))