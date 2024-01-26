// this is recursive method.....
function countDown(num) {
    if(num!==0)
        console.log('>>>', num)
    if (num !== 0) 
        countDown(num - 1)
}



countDown(10)