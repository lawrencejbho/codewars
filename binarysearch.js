/* 

- practicing after learning about how this works in Week 2 or algorithims 
- recursively do binary search, O(log n)
*/

/* 
This is the first way I tried it.  The problem here is leetcode is looking for the index of the final answer so splicing is not going to work 
*/ 


// my_array = [ 1, 3, 5, 7, 9 , 10, 12, 14, 16, 18 , 20]


// function binarySearch(value, array) { 
//     left = 0
//     end = array.length 
//     console.log(array)

//     mid = Math.floor((left + end) / 2)

//     if (array.length == 1 && value !== array[0]) {
//         return false;
//     }


//     if (value == array[mid]) {
//         return true;
//     } else if (value > array[mid]) {
//         return binarySearch(value, array.slice(mid,end))
//     } else if ( value < array[mid]) {
//         return binarySearch(value, array.slice(0,mid))
//     } 
// }


// console.log(binarySearch(4, my_array))



/* 
This is actually the recursive way of solving this but it looks like the leetcode version needs to be done with a while loop.  
Can't change the format where we can carry the start and end in the function)
*/

my_array = [-1,0,3,5,9,12]


var search = function binarySearch(value, array, start, end ) { 
    mid = Math.floor((start + end) / 2)

    if (start == mid && value != array[mid]) {
        return -1;
    }

    if (value == array[mid]) {
        return mid;
    } else if (value > array[mid]) {
        return binarySearch(value, array, mid, end)
    } else if ( value < array[mid]) {
        return binarySearch(value, array, 0, mid )
    } 
}


console.log(search(3,my_array,0, (my_array.length)))

