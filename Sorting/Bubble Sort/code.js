// -----------------------------------------------------------
//
// Bubble Sort
//
// TIME COMPLEXITY: O(n ^ 2)
// MEMORY COMPLEXITY: O(n)
//
// Bubble sort is a simple sorting algorithm.This sorting
// algorithm is comparison - based algorithm in which each
// pair of adjacent elements is compared and the elements
// are swapped if they are not in order. This algorithm is
// not suitable for large data sets as its average and
// worst case complexity are of Ο(n2) where n is the number
// of items.
//
// -----------------------------------------------------------


function bubble_sort(arr) {
	while (true) {
		let swapped = false;

		for (let i = 0; i < arr.length - 1; i++) {
			if (arr[i] < arr[i + 1]) {
				let temp = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = temp;
				swapped = true
			}
		}

		if (!swapped) break
	}
}

const arr = [21, 5, 29, 10, -6, 2, 35, 0, -10];
bubble_sort(arr);
console.log(arr);