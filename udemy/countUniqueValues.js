
// 2 pointers , but both pointers starting from same end


function countUniqueValues1(arr) {
    let resArr = []
    arr.map(el => {
        if (!resArr.includes(el)) {
            resArr.push(el)
        }
    })

    console.log('resArr', resArr)
    return resArr.length

}


function countUniqueValues2(arr) {
    let i = 0
    //[1, 2, 3, 3, 3, 4, 5, 6, 6, 6, 10]
    for (let j = 1; j < arr.length; ++j) {
        // start for j=1
        // if arr[i]!==arr[j] then i++ and 
        // else 

        if (arr[i] !== arr[j]) {
            console.log('Comparing', arr[i], arr[j])
            i++
            console.log('Putting on index',i, arr[j] )
            arr[i] = arr[j]
            console.log("if not eqal", arr)
            
        }
        else {
            console.log("if  eqal", arr)
        }


    }

    console.log('arr', arr, i)





}


let arr = [ 3, 3, 4, 5,6,7,7,7,0,9]


// console.log('normal solu', countUniqueValues1(arr))
console.log('best solu', countUniqueValues2(arr))