// -----------------------------------------------------------
//
// Insertion Sort
//
// TIME COMPLEXITY: O(n^2)
// MEMORY COMPLEXITY: O(n)
//
// The insertion sort algorithm is a simple sorting algorithm
// that builds the final sorted array (or list) one item at a time.
// It is much less efficient on large lists than more advanced
// algorithms such as quicksort, heapsort, or merge sort.
//
// -----------------------------------------------------------

function insertion_sort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let j = i;

        while ((j > 0) && (arr[j] < arr[j - 1])) {
            let temp = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = temp;
            j--;
        }
    }
}

const arr = [12, 63, 7, 128, 274, 43, 19];
insertion_sort(arr);
console.log(arr);