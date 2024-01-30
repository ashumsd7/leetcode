var isPrefixString = function (s, words) {

    if (s.length !== words[0].length) {
        return false
    }
    let arrString = ""
    for (i = 0; i < words.length; i++) {
        arrString += words[i]
    }
    console.log(arrString)
    let isPrefix = true
    for (i = 0; i < s.length; i++) {
        if (s[i] !== arrString[i]) {
            isPrefix = false
            break
        }
    }
    return isPrefix

};



let arr = ["aa", "aaaa", "banana"]
let s = 'a'
console.log(isPrefixString(s, arr))