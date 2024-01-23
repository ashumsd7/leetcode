var isPalindrome = function (s) {

    s = s.replace(/[^a-z0-9]/gi, '').toLowerCase()
    let temp = s
    s=s.split('').reverse().join('')
     return temp=== s
};






 
let input = "A man, a plan, a canal: Panama"


console.log('isPalindrome', isPalindrome(input))