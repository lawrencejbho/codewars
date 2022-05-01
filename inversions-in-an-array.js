

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
    let left = []

    for( let i=l; i< m +1; i++) {
        left.push(arr[i]);
    }

    let right =[]; 

    for(let i = m+1; i < r+1; i++) {
        right.push(arr[i]);
    }

    let i = 0, j = 0, k = l, swaps = 0;
    while (i < left.length && 
           j < right.length)
    {
        if (left[i] <= right[j])
        {
            arr[k++] = left[i++];
        }
        else
        {
            arr[k++] = right[j++];
            swaps += (m + 1) - (l + i);
        }
    }
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




