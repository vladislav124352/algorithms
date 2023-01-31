// -----------------------------------------------------------
//
// Binary Search
//
// TIME COMPLEXITY: O(log n)
// MEMORY COMPLEXITY: O(n)
//
// The main idea of binary search is to find the middle element
// of the array and compare it with the item we are looking for.
// If the item is greater than the middle element, we search in
// the right half of the array.If the item is smaller than the
// middle element, we search in the left half of the array.
// We repeat this process until we find the item or the array
// is empty.
//
// -----------------------------------------------------------

function binary_search(arr, item) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        let guess = arr[mid];
        if (guess === item) return mid;
        if (guess > item) end = mid - 1;
        else start = mid + 1;
    }

    return -1;
}

const arr = [2, 14, 16, 19, 52, 74, 126, 167, 178, 200, 1255];
console.log(binary_search(arr, 52));