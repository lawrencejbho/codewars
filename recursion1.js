


var s = ["h","e","l","l","o"]
// var s = ["H","a","n","n","a","h"]

var a = []

// function flipper(my_array) {

//     if (my_array.length == 0) { 
//         return a; 
//     }

//     a.push(my_array.pop())
//     return flipper(my_array)
// }

// console.log(flipper(s))


function flipper(s) {
    let left = 0;
    let end = s.length - 1
    while (left <= end) { 
        let temp = s[left]
        s[left] = s[end]
        s[end] = temp
        left++ 
        end--
        console.log(s)
    }
    return s

};

console.log(flipper(s))