function calFacto(num) {
    if (num == 0) {
        return 1
    }
    let res = 1
    while (num !== 1) {
        res = res * num
        num = num - 1

    }
    return res

}

// console.log(calFacto(5))


function fact(num) {
    console.log(num)
    if (num == 0)
        return 1
    return num *  fact(--num)

}

console.log(fact(5))