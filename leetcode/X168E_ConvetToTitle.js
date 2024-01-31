

let alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']


const getNumber = (index) => {
    return alphabets[index - 1]
}

var convertToTitle = function (columnNumber) {

    // let res = 1
    // for (i = 0; i < columnNumber.length; i++) {
    //     res = res + res * getNumber(columnNumber[i])
    // }

    // console.log('res', res)

    let res = ""
    if (columnNumber <= 26) {
        res = getNumber(columnNumber)

        return res
    }




    while (columnNumber >= 26) {
        if (columnNumber >= 26) {
            console.log('>>>>> if', columnNumber)
            res = res + "Z"
        } else {
            console.log('>>>>> else', columnNumber)
            res = res + getNumber(columnNumber)
        }

        let rem = columnNumber / 26
        // res = res + getNumber(rem)
        columnNumber = rem

        console.log('res', rem)
    }

    console.log('res',res)
    return res



};


let columnNumber = 28

console.log('res', convertToTitle(columnNumber))




