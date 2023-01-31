// -----------------------------------------------------------
//
// Exponential Search
//
// TIME COMPLEXITY: O(log k)
// MEMORY COMPLEXITY: O(1)
//
// Exponential search is a search algorithm for an 
// increasing and ordered sequence, typically 
// applied to an array or list.It is a combination 
// of binary search and linear search, with the aim 
// of reducing the number of elements to be examined. 
// It works by starting with a range that is larger 
// than the desired index, then repeatedly dividing 
// the range in half until the target value is found 
// or it is clear that the target value is not present 
// in the array.The time complexity of exponential 
// search is O(log k) where k is the index of the target value.
//
// For indexed arrays
// 
// -----------------------------------------------------------

function exp_search(arr, item) {
	let border = 1;

	while (border < arr.length - 1 && arr[border] < item)
		border *= 2
	if (border > arr.length)
		border = arr.length;

	let start = parseInt(border / 2);
	let end = border;

	while (start <= end) {
		let mid = parseInt((start + end) / 2)
		let mid_item = arr[mid];
		if (mid_item == item) return mid;
		if (mid_item < item) start = mid + 1;
		else end = mid - 1;
	}

	return -1;
}

const arr = [-2, -1, 0, 4, 6, 8, 10, 15, 20];
let index = exp_search(arr, 10);
console.log(index);

