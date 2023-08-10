// https://www.guru99.com/quicksort-in-javascript.html

var items = [5,3,7,6,2,9];

// function to help us swap
function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}

// this is where we do swaps around the pivot so all values on left side are less than pivot
// all values after this are larger than pivot 
function partition(items, left, right) {

    // this selects the middle element as our pivot 
    var pivot   = items[Math.floor((right + left) / 2)],
        i       = left, //left pointer
        j       = right; //right pointer

    // while loop until we get all the way to the pivot from both ends
    while (i <= j) {
        // first from the left side get to a number that is larger than the pivot
        while (items[i] < pivot) {
            i++;
        }
        // after this go from the right side to a number less than the pivot
        while (items[j] > pivot) {
            j--;
        }
        // as long as we don't get to pivot, then swap these two values and then continue in the original while loop
        if (i <= j) {
            swap(items, i, j); //swapping two elements 
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right) {
    // index will be different as more recursive calls
    var index;

    // will use recursion to continue to sort each end until we get to just 1 value
    if (items.length > 1) {
        // we get the new index on each recursive call as we go from left and right side
        index = partition(items, left, right); //index returned from partition
        // this is the left side and we continue to go down recursively
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        // this is the right side and we continue to go down recursively
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    // returning the sorted array 
    return items;
}
// first call to quick sort
var sortedArray = quickSort(items, 0, items.length - 1);

console.log(sortedArray);