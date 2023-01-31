// ---------------------------------------------
// 
// Merge Sort Algorithm
// 
// TIME COMPLEXITY: O(n + m)
// MEMORY COMPLEXITY: O(n + m)
// 
// Merge sort is a sorting algorithm that works 
// by dividing an unsorted list into n sublists, 
// each containing one element, and then repeatedly 
// merging sublists to produce new, sorted sublists 
// until there is only one sublist remaining. 
// It uses a divide - and - conquer approach, 
// has a time complexity of O(n log n), and is a stable sort.
// 
// ---------------------------------------------

//  Merge Two Arrays

function merge_arrays(arr1, arr2) {
	let left = 0;
	let right = 0;
	let result = new Array(arr1.length + arr2.length);

	for (let i = 0; i < result.length; i++) {
		if (left >= arr1.length) {
			result[i] = arr2[right];
			right++;
		} else if (right >= arr2.length) {
			result[i] = arr1[left];
			left++;
		} else if (arr1[left] < arr2[right]) {
			result[i] = arr1[left];
			left++;
		} else {
			result[i] = arr2[right];
			right++;
		}
	}

	return result;
}

const arr1 = [2, 4, 5, 9, 12];
const arr2 = [3, 8, 10, 11, 15];
const merged = merge_arrays(arr1, arr2);
console.log(merged);



// Merge Subarrays

function merge_subarrays(arr, l_start, l_end, r_start, r_end) {
	let left = l_start;
	let right = r_start;
	let result = new Array(arr.length);

	for (let i = 0; i < result.length; i++) {
		if (left > l_end) {
			result[i] = arr[right];
			right++;
		} else if (right > r_end) {
			result[i] = arr[left];
			left++;
		} else if (arr[left] < arr[right]) {
			result[i] = arr[left];
			left++;
		} else {
			result[i] = arr[right];
			right++;
		}
	}

	return result;
}

const arr = [2, 4, 5, 9, 12, 3, 8, 10, 11, 15];
const merged2 = merge_subarrays(arr, 0, 4, 5, 9);
console.log(merged2);
