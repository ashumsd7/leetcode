function checkPali(num) {
    const originalNumber = num
    let rev = 0;
    while (num !== 0) {
        let lastDigit = num % 10
        console.log('lastDigit', lastDigit)
        rev = rev * 10 + lastDigit
        console.log("Rev is", rev)
        num = Math.floor(num / 10)
    }
    console.log(rev)
    return rev == originalNumber


}
console.log(checkPali(12321))