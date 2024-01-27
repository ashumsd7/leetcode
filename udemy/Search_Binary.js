function binarySearch(arr, elem) {

    let start = 0;
    let end = arr.length - 1
    let middle = Math.floor((start + end) / 2)
    console.log(start, end, middle)
    if (arr[middle] == elem)
        return middle
    while (start <= end) {

        // if (start < 0 || end > arr.length)
        //     return -1

        if (elem < arr[middle])
            end = middle - 1
        else
            start = middle + 1
        middle = Math.floor((start + end) / 2)
    }
    if (arr[middle] == elem)
        return middle
    else
        return -1


}



let arr = [2, 5, 6, 9, 13, 15, 28, 30]
let elem = 302
console.log(binarySearch(arr, elem))