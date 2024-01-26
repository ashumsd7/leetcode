var mySqrt = function (x) {
    let mid = Math.floor(x / 2)
    console.log('len', x.toString().length)
    console.log('zero re', x.toString().length - 3)
    console.log('mid', mid)
    let range = x.toString().length - 3
    let lastRangeNUmber = "1"
    mid = mid + 1
    if (x.toString().length >= 5) {
        for (i = 0; i < range; i++) {
            lastRangeNUmber = lastRangeNUmber + '0'
        }

        console.log('lastRangeNUmber', lastRangeNUmber)
        lastRangeNUmber = +lastRangeNUmber
        console.log('lastRangeNUmber', lastRangeNUmber)
        mid = lastRangeNUmber
    }
    // return

  
    if (x == 0)
        return 0
    if (x == 2 || x == 1 || x == 3)
        return 1

    for (i = 0; i <= mid; i++) {
        // console.log(i * i)
        if (i * i >= x) {
            console.log('Yahi h', i)
            if (i * i == x) {
                return i
            } else {
                return i - 1
            }
        }
    }

};


console.log(mySqrt(1877853))