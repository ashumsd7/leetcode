var isIsomorphic = function (s, t) {
    let strObj1 = {}
    let strObj2 = {}

    s = s.split('')
    t = t.split('')

    console.log('s', s)

    for (i = 0; i < s.length; i++) {
        console.log(' strObj1[s[i]]', strObj1[s[i]], s[i])
        s[i] in strObj1 ? strObj1[s[i]]++ : strObj1[s[i]] = 1
    }
    for (i = 0; i < t.length; i++) {
        console.log(' strObj1[s[i]]', strObj2[s[i]], t[i])
        t[i] in strObj2 ? strObj2[t[i]]++ : strObj2[t[i]] = 1
    }

    console.log('strObj1', Object.values(strObj1))
    console.log('strObj2', Object.values(strObj2))

    let countArr1 = Object.values(strObj1)
    let countArr2 = Object.values(strObj2)


    if (countArr1.length !== countArr2.length) {
        return false
    }



    countArr1.forEach(el => {
        let idx = countArr2.indexOf(el)
        console.log(`searching ${el} in ${countArr2} and res is ${countArr2.includes(el)}`)
        if (idx !== -1) {
            countArr2.splice(idx, 1)
        }
    })

    console.log('countArr2',countArr2)

    return !countArr2.length

};



let s = "bbbaaaba"
let t ="aaabbbba"
console.log('isIsomorphic', isIsomorphic(s, t))