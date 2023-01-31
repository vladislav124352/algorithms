//  -----------------------------------------------------------
// 
//  Selection Sort
// 
//  TIME COMPLEXITY: O(n^2)
//  MEMORY COMPLEXITY: O(n)
// 
//  The selection sort algorithm sorts an array by repeatedly
//  finding the minimum element (considering ascending order)
//  from unsorted part and putting it at the beginning. The
//  algorithm maintains two subarrays in a given array.
// 
//  -----------------------------------------------------------


function selection_sort(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		let min_i = i;

		for (let j = i + 1; j < arr.length; j++)
			if (arr[min_i] > arr[j])
				min_i = j;

		if (min_i !== i) {
			let temp = arr[i];
			arr[i] = arr[min_i];
			arr[min_i] = temp;
		}
	}
}

const arr = [64, 25, 12, 22, 11];
selection_sort(arr);
console.log(arr);