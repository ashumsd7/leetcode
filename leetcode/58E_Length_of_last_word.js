var lengthOfLastWord = function (s) {
    s = s.trim()
    s = s.split(' ')
    s = s[s.length - 1].length
    return s

};


console.log('lengthOfLastWord', lengthOfLastWord('luffy is still joyboy'))