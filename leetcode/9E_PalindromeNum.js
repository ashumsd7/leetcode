var isPalindrome = function (x) {

    let res = ""
    x = x.toString()
    let temp = x
    for (i = x.length - 1; i >= 0; i--) {

        res = res + x.charAt(i)
    }

    console.log('res', res)
    return res === temp

};


console.log('is', isPalindrome(-121))

