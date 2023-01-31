// -----------------------------------------------------------
//
// Distribution Counting Sort
//
// TIME COMPLEXITY: O(n)
// MEMORY COMPLEXITY: O(n + k), k - range of numbers
//
// Distributive counting sort is a variation of counting sort. 
// Used to sort arrays of data whose sort keys are represented 
// by integers and their values lie in a relatively narrow range. 
// For example, if you need to sort an array of cats by age, 
// then this algorithm will show very high performance. The 
// important and positive point is that it is a stable sorting 
// algorithm.
//
// -----------------------------------------------------------

function dist_counting_sort(arr) {
	const min_item = Math.min(...arr);
	const max_item = Math.max(...arr);
	const length = max_item - min_item + 1;
	const support = new Array(length).fill(0);
	const sorted_arr = new Array(arr.length).fill(null);
	let size = arr.length;

	for (const item of arr)
		support[item - min_item] += 1;

	for (let i = length - 1; i > -1; i--) {
		size -= support[i];
		support[i] = size;
	}

	for (const item of arr) {
		const key = item - min_item;
		sorted_arr[support[key]] = item;
		support[key] += 1;
	}

	return sorted_arr;
}

const arr = [21, 6, 29, -2, -1, 0, 18, 10, 7, 5, 13, 16, 8, 6, 3];
const result = dist_counting_sort(arr);
console.log(result);
