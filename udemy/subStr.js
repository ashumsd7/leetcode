function matchSubStr(str, substr) {

    console.log(str)
    console.log(substr)

    let splittedStr = str.split('')
    let splittedSubStr = substr.split('')

    console.log(splittedStr, splittedSubStr)
    let c = 0
    for (i = 0; i < splittedStr.length; i++) {
        for (j = 0; j <= splittedSubStr.length - 1; j++) {
            if (splittedSubStr[j] !== splittedStr[i+j])
                break;
            else {
                if (j == splittedSubStr.length - 1) {
                    c++
                }

            }

        }
    }
    return c



}



console.log(matchSubStr('wowomgzomgxxxomg', 'omg'))