//  -----------------------------------------------------------
// 
//  Quick Sort
// 
//  TIME COMPLEXITY: O(n log n)
//  MEMORY COMPLEXITY: O(n)
// 
//  Quick sort is a divide and conquer algorithm.It picks an
//  element as pivot and partitions the given array around the
//  picked pivot.There are many different versions of quickSort
//  that pick pivot in different ways.
// 
//  -----------------------------------------------------------


function quick_sort(array) {
    if (array.length < 2) return array;
    const pivot = array[Math.ceil(array.length / 2)];
    const arrayOfLess = array.filter((number) => number < pivot);
    const arrayOfGreater = array.filter((number) => number > pivot);
    return [...quick_sort(arrayOfLess), pivot, ...quick_sort(arrayOfGreater)];
}

console.log(quick_sort([25, 651, 2, 65, 12, 6, 1, 6, 89, 57]))