var getConcatenation = function (nums) {
    const newArray = [...nums]
    newArray.forEach((_, idx) => newArray.push(newArray[idx]))


};


getConcatenation([1, 2, 3])