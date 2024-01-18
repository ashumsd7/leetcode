
// s
function gethcf(a,b){
    let min= Math.min(a,b)
 
  console.log('MIN is', min)
    while(min!==0){
        console.log('chnaged min is', min,a,b)
        if(a%min==0 && b%min==0){
            console.log('res', min)
         return min
        }
        min--
    }
    return min

}

// console.log(gethcf(4,6))

//  Ecludian


function gethcf2(a,b){

    if(a==0){
        return b
    }
    return gethcf2((b%a),a)



}

console.log(gethcf2(4,6))