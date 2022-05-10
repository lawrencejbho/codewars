

my_array = [
54044,
14108,
79294,
29649,
25260,
60660,
]

/* divide and conquer using enhanced merge sort */




function mergeAndCount(arr, l, m, r) { 
    /* split the array into a left and right side */
    let left = []

    for( let i=l; i< m +1; i++) {
        left.push(arr[i]);
    }

    let right =[]; 

    for(let i = m+1; i < r+1; i++) {
        right.push(arr[i]);
    }


/* 
this checks if left side is bigger, if it is then assign the new array as this
otherwise the right side number that is being compared will be assigned to the new array
*/    
    let i = 0, j = 0, k = l, swaps = 0;
    while (i < left.length && 
           j < right.length)
    {
        if (left[i] <= right[j])
        {
            console.log('left ' + arr)
            arr[k++] = left[i++];
        }
        else
        {
            arr[k++] = right[j++];
            console.log('right ' + arr)
            swaps += (m + 1) - (l + i);
            console.log(swaps)
        }
    }

    /* 
    this is the end cases, when you have the end of the array on left or right and you still have
    numbers left in the other array
    neither should incremenet the number of swaps as everything is already accounted for
    */ 
    while (i < left.length)
    {
        arr[k++] = left[i++];
    }
          
    while (j < right.length)
    {
        arr[k++] = right[j++];
    }
    return swaps;
}

function mergeSortAndCount(arr, l, r) { 
    let count = 0;
    if (l < r) 
    { 
        let m = Math.floor((l+r) /2 );

/* 
- this is the recursion happening, it breaks down our initial array into tinier arrays until our array size is 2 or 1
- each time this happens we are sorting our array and also maintaining how many swaps are happening

*/
        count += mergeSortAndCount(arr,l,m);
        count += mergeSortAndCount(arr,m+1,r);
        count += mergeAndCount(arr,l,m, r);
    }
    return count;
}





console.log(mergeSortAndCount(my_array, 0, my_array.length-1))




/* iterative method O(n^2)*/

// my_array = [1, 20, 6, 4, 5]; 

// function getInvCount(arr) {
//     let inversion_count = 0
//     for(let i = 0; i < arr.length - 1; i++ ) {
//         for (let j=i+1; j < arr.length; j++) {
//             if (arr[i] > arr[j]) {
//                 console.log(arr[i] + ' ' + arr[j])
//                 inversion_count++;
//             }
//         }
//     }
//     return inversion_count
// }




