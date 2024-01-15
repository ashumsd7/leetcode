var groupAnagrams = function (strs) {

    let resObj = {}
    for (i = 0; i < strs.length; i++) {
        console.log("Picked IDX", strs[i], i)
    
        let strSpiltted = strs[i].split('')
        console.log('picked splitted', strSpiltted)

        resObj[i] = []
        resObj[i].push(strs[i])

        console.log('resObj Oushed',resObj)

        console.log('Now going to check picked splitted fo r each char')

        for (j = i + 1; j < strs.length; j++) {
            console.log("><><><",strs[j],j)
            let isMatched = true
            let isWentInSide = false

            // if (strSpiltted.length == 0) {
            //     isMatched = false
            // }


            if (strSpiltted.length) {
                console.log('ARRAY', i, j)
                strSpiltted.forEach((el, idx) => {
                    isWentInSide = true
                    if (strs[j].includes(el)) {
                        if (isMatched) {
                            isMatched = true
                        }

                    } else {
                        isMatched = false
                    }

                })
            } else {
                console.log('NO ARRAY', i, j)
                if (strs[j] == strs[i]) {
                    if (isMatched) {
                        isMatched = true
                    }

                } else {
                    isMatched = false
                }
            }
            if (isMatched) {
                console.log('Yes', strs[i], "is matched with", strs[j])
                resObj[i].push(strs[j])
                strs.splice(j, 1)

            } else {

            }

        }

        console.log("********", strs)


    }


    return Object.values(resObj)


};

let input =["","",""]
console.log(groupAnagrams(input))