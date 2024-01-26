// this is recursive method.....
function countDown(num) {
    if(num!==0)
        console.log('>>>', num)
    if (num !== 0) 
        countDown(num - 1)
}




function sumRange(num){
    console.log(`sumRange with ${num}`)

    if(num==1){
        return 1
    }
    return num +sumRange(num-1)

}

// countDown(10)
console.log(sumRange(4))