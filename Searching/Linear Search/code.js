// -----------------------------------------------------------
//
// Linear Search
//
// TIME COMPLEXITY: O(n)
// MEMORY COMPLEXITY: O(n)
//
// The linear search is a very simple search algorithm.It
// sequentially checks each element of the list until a match
// is found or the whole list has been searched.
//
// -----------------------------------------------------------

function linear_search(arr, item) {
	for (let i = 0; i < arr.length; i++)
		if (arr[i] === item)
			return i;
	return -1;
}

const arr = [-2, 0, 5, 7, 9, 12, 15, 16];
console.log(linear_search(arr, 7));
