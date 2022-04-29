


array = [0, 5, 10, 12]


function reducePractice(a) {
    // return array.reduce(function(sum, currentValue) { return sum + currentValue}, 0 )

    return a.reduce((sum, currentValue) => sum + currentValue, 0);
}




console.log(reducePractice(array))