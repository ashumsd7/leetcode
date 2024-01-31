/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
     

    let j= s.length
    let i=0
    while(i<j){
        let temp= s[i]
        s[i]=s[j]
        s[j]=temp
        i++
        j--
    }
    s.shift()
    console.log('S',s)
    return s
};