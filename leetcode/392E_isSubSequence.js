var isSubsequence = function (s, t) {

    const firstStringArr = s.split('')
    const secondStringArr = t.split('')
    console.log(firstStringArr, secondStringArr)

    resIdxArr = []
    firstStringArr.forEach((el, idx) => {
        console.log('checking', el, " firstIndex", secondStringArr.indexOf(el), "lastIndex", secondStringArr.lastIndexOf(el))
        const firstIndex = secondStringArr.indexOf(el)
        const lastIndex = secondStringArr.lastIndexOf(el)
        console.log('INDEX-el', idx, el)
        if (idx - 1 >= 0) {
            if (resIdxArr[idx - 1] < firstIndex) {
                console.log('First if res dix-1, firstIndex', resIdxArr[idx - 1], firstIndex)
                resIdxArr.push(firstIndex)
                if (firstIndex !== -1) {
                    secondStringArr.splice(firstIndex, 1, '$$')
                }
            }
            else if (resIdxArr[idx - 1] < lastIndex) {
                console.log('2nd if res dix-1, lastIndex', resIdxArr[idx - 1], lastIndex)
                resIdxArr.push(lastIndex)
                if (lastIndex !== -1) {
                    secondStringArr.splice(lastIndex, 1, '##')
                }

            }
            else {
                console.log('Normal else last')
                resIdxArr.push(secondStringArr.indexOf(el))
                secondStringArr.splice(secondStringArr.indexOf(el), 1, '&&')
            }
        } else {
            console.log('Normal else last')
            resIdxArr.push(secondStringArr.indexOf(el))
            secondStringArr.splice(secondStringArr.indexOf(el), 1, '&&')
        }
        console.log('resIdxArr', resIdxArr)
        console.log('secondStringArr', secondStringArr)

    })
    console.log('secondStringArr', secondStringArr)
    console.log('resIdxArr', resIdxArr)
    let isInSeq = true
    // resIdxArr = resIdxArr.sort((a, b) => a - b)
    console.log('resIdxArr', resIdxArr)
    if (resIdxArr.includes(-1)) {
        return false
    }

    // const mainRes=

    resIdxArr.forEach((el, idx) => {
        if (idx >= resIdxArr.length - 1)
            return isInSeq
        console.log('el < resIdxArr[idx + 1]', el < resIdxArr[idx + 1])
        if (el < resIdxArr[idx + 1] && isInSeq) {
            isInSeq = true
        } else {
            isInSeq = false
        }
    })


    return isInSeq



};


let arr2 = "mjmqqjrmzkvhxlyruonekhhofpzzslupzojfuoztvzmmqvmlhgqxehojfowtrinbatjujaxekbcydldglkbxsqbbnrkhfdnpfbuaktupfftiljwpgglkjqunvithzlzpgikixqeuimmtbiskemplcvljqgvlzvnqxgedxqnznddkiujwhdefziydtquoudzxstpjjitmiimbjfgfjikkjycwgnpdxpeppsturjwkgnifinccvqzwlbmgpdaodzptyrjjkbqmgdrftfbwgimsmjpknuqtijrsnwvtytqqvookinzmkkkrkgwafohflvuedssukjgipgmypakhlckvizmqvycvbxhlljzejcaijqnfgobuhuiahtmxfzoplmmjfxtggwwxliplntkfuxjcnzcqsaagahbbneugiocexcfpszzomumfqpaiydssmihdoewahoswhlnpctjmkyufsvjlrflfiktndubnymenlmpyrhjxfdcq"

console.log(isSubsequence('rjufvjafbxnbgriwgokdgqdqewn', arr2))