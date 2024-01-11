
var isAnagram = function(s, t) {
    let result = true
    if (s.length !== t.length)
        result = false
        
    const strArr1 = s.split('')
    const strArr2 = t.split('')
    strArr1.forEach(el => strArr2.includes(el) ? strArr2.splice(strArr2.indexOf(el), 1) : result = false)
    return result

};